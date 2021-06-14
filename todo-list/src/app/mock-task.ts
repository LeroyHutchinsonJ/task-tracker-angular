import {Task} from './Task';

// By making TASKS use the Task interface, I can make it so that any extra fields must be added to the Tasks.ts interface before I use it
export const TASKS: Task[] = [
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'May 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'May 6th at 1:30pm',
        reminder: true,
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'May 7th at 12:30pm',
        reminder: false,
    }
]