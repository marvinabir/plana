import prisma from "../config/database";
import { Booking } from '../interfaces/booking';

/**
 * Function to get all bookings
 * @returns 
 */
const getAllBookings = async (): Promise<Booking[]> => {
  try {
    return await prisma.booking.findMany();
  } catch (error: any) {
    throw new Error(`Error retrieving bookings: ${error.message}`);
  }
};

/**
 * Function to get a booking by ID
 * @param id 
 * @returns 
 */
const getBookingById = async (id: number): Promise<Booking | null> => {
  try {
    return await prisma.booking.findUnique({
      where: { id },
    });
  } catch (error: any) {
    throw new Error(`Error retrieving booking: ${error.message}`);
  }
};

/**
 * Function to create a new booking
 * @param bookingData 
 * @returns 
 */
const createBooking = async (bookingData: Booking): Promise<Booking> => {
  const { userId, eventId, ticketTypeId, status } = bookingData;
  try {
    return await prisma.booking.create({
      data: {
        userId,
        eventId,
        ticketTypeId,
        status,
      },
    });
  } catch (error: any) {
    throw new Error(`Error creating booking: ${error.message}`);
  }
};

/**
 * Function to update an existing booking
 * @param id 
 * @param bookingData 
 * @returns 
 */
const updateBooking = async (id: number, bookingData: Partial<Booking>): Promise<Booking> => {
  const { userId, eventId, ticketTypeId, status } = bookingData;
  try {
    return await prisma.booking.update({
      where: { id },
      data: {
        userId,
        eventId,
        ticketTypeId,
        status,
      },
    });
  } catch (error: any) {
    throw new Error(`Error updating booking: ${error.message}`);
  }
};

/**
 * Function to delete a booking
 * @param id 
 * @returns 
 */
const deleteBooking = async (id: number): Promise<Booking> => {
  try {
    return await prisma.booking.delete({
      where: { id },
    });
  } catch (error: any) {
    throw new Error(`Error deleting booking: ${error.message}`);
  }
};

export { getAllBookings, getBookingById, createBooking, updateBooking, deleteBooking };
