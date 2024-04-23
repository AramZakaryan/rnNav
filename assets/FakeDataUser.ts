export type fakeDataUserType = {
    id: number
    firstName: string
    lastName: string
    avatar: string | null
    location: {
        country: string
        city: string
    },
    skills: string[]
    role: string
}

export const fakeDataUser: Array<fakeDataUserType> = [
    {
        id: 1,
        firstName: 'Test first',
        lastName: 'Test last',
        avatar: 'https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=1380&t=st=1713896878~exp=1713897478~hmac=6cc253850da411e11089ae093585c717e697279f6efac8acf25d5d9e759d693c',
        location: {
            country: 'Belarus',
            city: 'Minsk',
        },
        skills: ['HTML', 'CSS', 'JS', 'React', 'Redux', 'Nest JS', 'Mongo DB', 'C#'],
        role: 'Boss'
    },
]
