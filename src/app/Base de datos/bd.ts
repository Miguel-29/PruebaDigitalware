//  Almacen de todos los registros
let recordsUser: Array<users> = [
    {
        id: 1,
        user: "prueba",
        password: "prueba.123",
        role: "pilot",
        name: "prueba",
        lastName: "prueba",
        age: 22,
        years_experience: 1,
        nationality: "Colombiano"
    }
]

let recordsAerospace: Array<aerospace> = [
    {
        id: 1,
        color: "negro",
        capacity: 30,
        plate: "XXX555",
    }
];

let recordsFlight: Array<flight> = [
    {
        id: 1,
        location: "Marte",
        arrival: "2021-01-01",
        output: "2021-02-01",
        passengers: 20,
        pilot: "Miguel"
    }
]

interface users {
    id: number
    user: string,
    password: string,
    role: string,
    name: string, 
    lastName: string,
    age: number,
    years_experience: number,
    nationality: string
} 

interface aerospace {
    id: number,
    color: string,
    capacity: number,
    plate: string
}

interface flight {
    id: number
    location: string,
    arrival: string, 
    output: string,
    passengers: number,
    pilot: string
};


// "endpoints" creados en un "api" para el uso de estos registros.

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export default class endpoints {
    // metodos para usuarios
    validateUser = (data: {user: string, password: string}) => {
        return recordsUser.find((user: any) => {
            if(user.password == data.password && user.user == data.user) {
                return user
            }
        })
    }

    addUser = (data: users) => {
        let user: users;
        user = {
            id: recordsUser.length + 1,
            user: data.user,
            password: data.password,
            role: data.role,
            name: data.name,
            lastName: data.lastName,
            age: data.age,
            years_experience: data.years_experience,
            nationality: data.nationality,
        };
        recordsUser = [...recordsUser, user];
    }
    
    updateUser = (data: users) => {
        let userUpdate: any = recordsUser.map(user => {
            if(user.id === data.id) {
                return user = {
                    id: user.id,
                    user: data.user,
                    password: data.password,
                    role: data.role,
                    name: data.name,
                    lastName: data.lastName,
                    age: data.age,
                    years_experience: data.years_experience,
                    nationality: data.nationality,
                }
            }
            return user
        });
        recordsUser = userUpdate
    }
    
    removeUser = (id: number) => {
        let userFilters = recordsUser.filter(user => {
            return user.id !== id
        });
        recordsUser = userFilters;
    }

    getUser = () => {
        return recordsUser
    }

    // metodos para las aeronaves   
    addAerospace = (data: aerospace) => {
        let aerospace: aerospace;
        aerospace = {
            id: recordsAerospace.length + 1,
            color: data.color,
            capacity: data.capacity,
            plate: data.plate,
        };
        recordsAerospace = [...recordsAerospace, aerospace];
    }
    
    updateAerospace = (data: aerospace) => {
        let aerospaceUpdate: any = recordsAerospace.map(aerospace => {
            if(aerospace.id === data.id) {
                return aerospace = {
                    id: aerospaceUpdate.id,
                    color: data.color,
                    capacity: data.capacity,
                    plate: data.plate,
                }
            }
            return aerospace
        });
        recordsAerospace = aerospaceUpdate
    }
    
    removeAerospace = (id: number) => {
        let aerospaceFilters = recordsAerospace.filter(aerospaceUpdate => {
            return aerospaceUpdate.id !== id
        });
        recordsAerospace = aerospaceFilters;
    }

    getAerospace = () => {
        return recordsAerospace
    }
    
    // metodos para los prestamos de aeronaves    
    addFlights = (data: flight) => {
        console.log(data)
        let flight: flight = {
            id: recordsFlight.length + 1,
            location: data.location,
            arrival: data.arrival,
            output: data.output,
            passengers: data.passengers,
            pilot: data.pilot
        };
        recordsFlight = [...recordsFlight, flight];
        console.log(recordsFlight);
    }
    
    updateFlights = (data: flight) => {
        let flight: any = recordsFlight.map(flight => {
            console.log(data)
            console.log(flight)
            if(flight.id === data.id) {
                return flight = {
                    id: flight.id,
                    location: data.location,
                    arrival: data.arrival,
                    output: data.output,
                    passengers: data.passengers,
                    pilot: data.pilot
                }
            }
            return flight
        });
        console.log(flight);
        recordsFlight = flight
    }
    
    removeFlights = (id: number) => {
        let flightsFilters = recordsFlight.filter(flight => {
            return flight.id !== id
        });
        recordsFlight = flightsFilters;
    }

    getFlights = () => {
        return recordsFlight
    }
}