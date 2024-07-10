import express from 'express'
import { acceptRequest, createProfile, listOfAccepted, listOfSentRequest, rejectTheRequest, requestListOfUser, searchProfiles, sendRequest, viewAUser } from '../../controllers/matrimonyProfile.js'
import MatrimonyProfileconnection from '../../models/ConnectedProfile.js';
import { verifyProfile } from '../../utils/verifyToken.js';
const router = express.Router()

router.post('/createProfile',createProfile)
router.get('/searchProfiles', searchProfiles);
router.get('/getProfile/:singleUID',verifyProfile,viewAUser);
router.post('/sendRequest',sendRequest)
router.post('/acceptRequest',acceptRequest)
router.post('/rejectTheRequest',rejectTheRequest)
// router.get('/listOfRequests/:profileId',requestListOfUser)
router.get('/listOfRequests/:userId', requestListOfUser);
router.get('/listOfSentRequest/:profileId',listOfSentRequest)
router.get('/listOfAccepted/:id',listOfAccepted)
export default router