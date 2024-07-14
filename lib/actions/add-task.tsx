'use server'
import prisma from "../prisma"
import { redirect } from "next/navigation";

export async function createTask(formData: FormData) {
  try {
    const name = formData.get("name")?.toString();
    const description = formData.get("description")?.toString();
    const priority = formData.get("priority")?.toString();
    const completion = formData.get('completion')?.toString();

    if (!name || !description || !priority || !completion) {
      console.error("Missing required fields");
      return;
    }

    const newTask = await prisma.task.create({
      data: {
        name: name,
        description: description,
        priority: priority,
        completion: completion,
      },
    });

    redirect("/");
  } catch (error) {
    console.error("Error creating task:", error);
  }
}
