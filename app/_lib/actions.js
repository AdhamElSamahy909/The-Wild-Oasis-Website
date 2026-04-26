"use server";

import { auth, signIn, signOut } from "./auth";
import { getBookings } from "./data-service";
import { supabase } from "./supabase";
import { hashSync } from "bcrypt-ts";

export async function updateProfile(formData) {
  try {
    const session = await auth();
    if (!session) throw new Error("You must be logged in");

    const nationalID = formData.get("nationalId");
    const nationality = formData.get("nationality");

    console.log("National ID: ", nationalID);
    console.log("Nationality: ", nationality);

    if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
      return {
        error: "National ID must be alphanumeric and 6-12 characters long",
      };

    const updateData = { nationality, nationalID };

    const { data, error } = await supabase
      .from("guests")
      .update(updateData)
      .eq("id", session.user.id)
      .select()
      .single();

    if (error) {
      console.error(error);
      return { error: error.message || "Profile could not be updated" };
    }
  } catch (error) {
    console.error("Error in updateProfile action: ", error);
    return { error: error.message || "An unexpected error occurred" };
  }

  // redirect("/account/profile");

  //   revalidatePath("/account/profile");
  //   return data;
}

export async function createReservation(bookingData, formData) {
  try {
    const session = await auth();
    console.log("Session in createReservation: ", session);
    if (!session) return { error: "You must be logged in" };

    const newBooking = {
      ...bookingData,
      guestId: session.user.id,
      numGuests: Number(formData.get("numGuests")),
      observations: formData.get("observations").slice(0, 1000),
      extrasPrice: 0,
      totalPrice: bookingData.cabinPrice,
      isPaid: false,
      hasBreakfast: false,
      status: "unconfrimed",
    };

    const { error } = await supabase
      .from("bookings")
      .insert([newBooking])
      .select()
      .single();

    if (error) {
      console.error(error);
      return { error: error.message || "Booking could not be created" };
    }
  } catch (error) {
    console.error("Error in createReservation action: ", error);
    return { error: error.message || "An unexpected error occurred" };
  }

  // revalidatePath(`/cabins/${bookingData.cabinId}`);
}

export async function updateReservation(formData) {
  try {
    const session = await auth();
    if (!session) return { error: "You must be logged in" };

    const bookingId = Number(formData.get("bookingId"));

    const guestBookings = await getBookings(session.user.id);
    const guestBookingsIds = guestBookings.map((booking) => booking.id);

    if (!guestBookingsIds.includes(bookingId))
      return { error: "You are not allowed to edit this booking" };

    const numGuests = Number(formData.get("numGuests"));
    const observations = formData.get("observations").slice(0, 1000);

    const updateFields = { numGuests, observations };

    const { data, error } = await supabase
      .from("bookings")
      .update(updateFields)
      .eq("id", bookingId)
      .select()
      .single();

    if (error) {
      console.error(error);
      return { error: error.message || "Booking could not be updated" };
    }
  } catch (error) {
    console.error("Error in updateReservation action: ", error);
    return { error: error.message || "An unexpected error occurred" };
  }

  // revalidatePath(`/account/reservation/edit/${bookingId}`);
  // revalidatePath("/account/reservations");

  // redirect("/account/reservations");
}

export async function deleteReservation(bookingId) {
  try {
    const session = await auth();
    if (!session) throw new Error("You must be logged in");

    const guestBookings = await getBookings(session.user.id);
    const guestBookingsIds = guestBookings.map((booking) => booking.id);

    if (!guestBookingsIds.includes(bookingId)) {
      throw new Error("You can't delete this booking");
    }

    const { error } = await supabase
      .from("bookings")
      .delete()
      .eq("id", bookingId);

    if (error) {
      console.error(error);
      return { error: error.message || "Booking could not be deleted" };
    }
  } catch (error) {
    console.error("Error in deleteReservation action: ", error);
    return { error: error.message || "An unexpected error occurred" };
  }

  // revalidatePath("/account/reservations");
}

export async function signUpAction(prevState, formData) {
  try {
    console.log("formData: ", formData);

    const fullName = formData.get("fullName");
    const email = formData.get("email");
    const password = formData.get("password");

    if (!email || !password) {
      throw new Error("Email and password are required");
    }

    const hashedPassword = hashSync(password, 10);

    const { data, error } = await supabase
      .from("guests")
      .insert([{ fullName, email, password: hashedPassword }])
      .select()
      .single();

    if (error) {
      console.log("Error during sign up: ", error);
      return { error: "Could not create user. Email might already exist." };
    }

    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (result?.error) {
        console.log("Login error after sign up: ", result.error);
        return {
          error:
            "Account created, but automatic sign-in failed. Please login manually.",
        };
      }
    } catch (err) {
      console.log("Unexpected error during sign in after sign up: ", err);
      return {
        error:
          "Account created, but automatic sign-in failed. Please login manually.",
      };
    }

    return { success: true, user: data };
  } catch (error) {
    console.error(error);
    return { error: "An unexpected error occurred. Please try again." };
  }
}

// export async function signInAction(prevState, formData) {
//   try {
//     // console.log("1. Starting NextAuth signIn...");
//     const email = formData.get("email");
//     const password = formData.get("password");

//     if (!email || !password) {
//       return { error: "Email and password are required" };
//     }

//     await signIn("credentials", {
//       email,
//       password,
//       redirect: "/account",
//     });

//     console.log("2. NextAuth finished. Result:", result);
//   } catch (error) {
//     console.log("ERROR CAUGHT: ", error);
//     if (error instanceof AuthError) {
//       switch (error.type) {
//         case "CredentialsSignin":
//           return { error: "Invalid email or password" };
//         default:
//           return { error: "Something went wrong during signin" };
//       }
//     }

//     throw error;
//   }

//   // console.log("3. Attempting Next.js redirect...");

//   // redirect("/account");
// }

// export async function signOutAction() {
//   await signOut({ redirectTo: "/" });
// }
