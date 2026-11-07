import prisma from '../config/db.js';

// Prisma ignores an undefined filter, so all tasks are returned when completed is not provided
export async function findAll(completed) {
  return prisma.task.findMany({
    where: { completed },
  });
}

// Create a new task
export async function create(data) {
  return prisma.task.create({
    data,
  });
}
