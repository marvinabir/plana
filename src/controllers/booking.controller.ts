import { Request, Response } from 'express';
import { getAllBookings, getBookingById, createBooking, updateBooking, deleteBooking } from '../services/booking.service';

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
