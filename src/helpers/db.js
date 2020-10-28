import { datab } from '../services/firebase';

export function GetEvents(uid) {
  return datab.collection('events').where('ownerId','==',uid).get();
}
export function GetEquipments(uid) {
  return datab.collection('equipments').where('ownerId','==',uid).get();
}
export function GetPeople(uid) {
  return datab.collection('people').where('ownerId','==',uid).get();
}
export function UpdateEvents(id) {
  return datab.collection('events').doc(id)
}
export function UpdateEquipments(id) {
  return datab.collection('equipments').doc(id)
}
export function UpdatePeople(id) {
  return datab.collection('people').doc(id)
}