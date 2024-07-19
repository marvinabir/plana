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


/**
 * Function to get all bookings by user ID
 * @param userId 
 * @returns 
 */
const getBookingsByUserId = async (userId: number): Promise<Booking[]> => {
  try {
    return await prisma.booking.findMany({
      where: { userId },
    });
  } catch (error: any) {
    throw new Error(`Error retrieving bookings for user: ${error.message}`);
  }
};

export {  getBookingsByUserId };


/**
 * Function to create group bookings for multiple users
 * @param bookingDataList 
 * @returns 
 */
const createGroupBooking = async (bookingDataList: Booking[]): Promise<boolean> => {
  try {
    const result = await prisma.booking.createMany({
      data: bookingDataList.map((bookingData) => ({
        userId: bookingData.userId,
        eventId: bookingData.eventId,
        ticketTypeId: bookingData.ticketTypeId,
        status: bookingData.status,
      })),
    });
    return result.count === bookingDataList.length;
  } catch (error: any) {
    throw new Error(`Error creating group bookings: ${error.message}`);
  }
};

export { createGroupBooking };

/**
 * Function to get group bookings by user ID and event ID
 * @param userId 
 * @param eventId 
 * @returns 
 */
const getGroupBookings = async (userId: number, eventId: number): Promise<Booking[]> => {
  try {
    return await prisma.booking.findMany({
      where: {
        userId,
        eventId,
      },
    });
  } catch (error: any) {
    throw new Error(`Error retrieving group bookings: ${error.message}`);
  }
};

export {  getGroupBookings };


