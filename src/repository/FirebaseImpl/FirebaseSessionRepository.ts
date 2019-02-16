import { ISession } from '../../model/Session';
import FirebaseRepository from './FirebaseRepository';

const SESSION_COLLECTION = 'Session';
const collection = FirebaseRepository.database.collection(SESSION_COLLECTION);

const getSessionDoc = (sessionId: string) => collection.doc(sessionId);
const createSession = (session: ISession) => collection.add(session);

const FirebaseSessionRepository = {
    getSessionDoc,
    createSession
}

export default FirebaseSessionRepository;

