export interface Interes {
    nombre: string,
    interesID: number,
}
export function getIntereses(): Promise<Interes[]> {
    return fetch(`http://localhost:8081/intereses`, {
        method: 'GET',
    })
        .then((res) => res.json())
}