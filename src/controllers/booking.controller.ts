import { Request, Response } from 'express';
import { getAllBookings, getBookingById, createBooking, updateBooking, deleteBooking, getBookingsByUserId, createGroupBooking, getGroupBookings } from '../services/booking.service';
import { sendRegistrationEmail } from '../config/mailer'
import { registerUser, loginUser, resetPassword } from '../services/user.service';
import { User } from '../interfaces/user';
/**
 * Controller to handle getting all bookings
 * @param req 
 * @param res 
 */
const getAll = async (req: Request, res: Response) => {
  try {
    const bookings = await getAllBookings();
    res.status(200).json(bookings);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * Controller to handle getting a booking by ID
 * @param req 
 * @param res 
 */
const getById = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const booking = await getBookingById(parseInt(id, 10));
    res.status(200).json(booking);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * Controller to handle creating a new booking
 * @param req 
 * @param res 
 */
const create = async (req: Request, res: Response) => {
  try {
    const booking = await createBooking(req.body);
    res.status(201).json(booking);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * Controller to handle updating a booking
 * @param req 
 * @param res 
 */
const update = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const booking = await updateBooking(parseInt(id, 10), req.body);
    res.status(200).json(booking);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

/**
 * Controller to handle deleting a booking
 * @param req 
 * @param res 
 */
const remove = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const booking = await deleteBooking(parseInt(id, 10));
    res.status(200).json(booking);
  } catch (error:any) {
    res.status(400).json({ error: error.message });
  }
};

export { getAll, getById, create, update, remove };


/**
 * Controller to handle getting all bookings by user ID
 * @param req 
 * @param res 
 */
const getByUserId = async (req: Request, res: Response) => {
  const { userId } = req.params;
  try {
    const bookings = await getBookingsByUserId(parseInt(userId, 10));
    res.status(200).json(bookings);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export { getByUserId };

/**
 * Controller to handle creating group bookings for multiple users
 * @param req 
 * @param res 
 */
const createGroup = async (req: Request, res: Response) => {
  try {
    const success = await createGroupBooking(req.body);
    if (success) {
      res.status(201).json({ message: 'Group bookings created successfully' });
    } else {
      res.status(400).json({ error: 'Failed to create all group bookings' });
    }
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export { createGroup };


/**
 * Controller to handle getting group bookings by user ID and event ID
 * @param req 
 * @param res 
 */
const getGroup = async (req: Request, res: Response) => {
  const { userId, eventId } = req.params;
  try {
    const bookings = await getGroupBookings(parseInt(userId, 10), parseInt(eventId, 10));
    res.status(200).json(bookings);
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export {  getGroup };

