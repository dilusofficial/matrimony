import express from 'express'
import { acceptRequest, createProfile, listOfAccepted, listOfSentRequest, rejectTheRequest, requestListOfUser, searchProfiles, sendRequest, viewAUser } from '../../controllers/matrimonyProfile.js'
import MatrimonyProfileconnection from '../../models/ConnectedProfile.js';
import { verifyProfile } from '../../utils/verifyToken.js';
const router = express.Router()

router.post('/createProfile',createProfile)
router.get('/searchProfiles', searchProfiles);
router.get('/getProfile/:id',verifyProfile,viewAUser);
router.post('/sendRequest/:id',verifyProfile,sendRequest)
router.post('/acceptRequest',acceptRequest)
router.post('/rejectTheRequest',rejectTheRequest)
// router.get('/listOfRequests/:profileId',requestListOfUser)
router.get('/listOfRequests/:id',verifyProfile, requestListOfUser);
router.get('/listOfSentRequest/:id',verifyProfile,listOfSentRequest)
router.get('/listOfAccepted/:id',verifyProfile,listOfAccepted)
export default router