import { Router } from "express";
import { changePassword, loginUser, registerUser } from "../controller/user.controller.js";
import { countImpNotes, countsimpleNotes, createImportantNote, createNotes, deleteNote, getImpNotes, getNotes } from "../controller/note.controller.js";

const router = Router();

router.route("/signup").post(registerUser);
router.route("/login").post(loginUser);
router.route("/changePassword").post(changePassword)
// router.route("/logout").post(logoutUser)



// for notes
router.route("/createNotes").post(createNotes);
router.route("/createImportantNote").post(createImportantNote)
router.route("/getNotes").post(getNotes);
router.route("/getImpNotes").post(getImpNotes)
router.route("/countNotes").post(countsimpleNotes)
router.route("/countImpNotes").post(countImpNotes)
router.route("/deleteNote").delete(deleteNote)





export default router