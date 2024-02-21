const express = require('express');

const router = express.Router();

const db = require('../db');

//http://localhost:4000/facilities/fetch_all_facilities - GET
router.get('/fetch_all_facilities', async (req, res) => {
    try {
        //fetch alist from db and then send
        //const dbdata = await db.promise().query(`SELECT * FROM facilities`)
        const dbdata = await db.promise().query(`SELECT facilityname, facilitydescription FROM facilities`)
        //res.send('list of all api');
        res.status(200).json(dbdata[0])
    }

    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

//http://localhost:4000/facilities/fetch_facility_byid/2 - GET
router.get('/fetch_facility_byid/:id', async (req, res) => {
    //fetch alist from db and then send
    console.log('ID - ', req.params.id)
    const dbdata = await db.promise().query(`SELECT facilityname, facilitydescription FROM facilities WHERE facility_id = ${req.params.id}`)
    //res.send('list of all api');
    res.status(200).json(dbdata[0][0])
})

//http://localhost:4000/facilities/add_facility - POST
router.post('/add_facility/', async (req, res) => {
    const data_fe = req.body;
    //fetch alist from db and then send
    const dbdata = await db.promise().query(`SELECT facilityname, facilitydescription FROM facilities WHERE facility_id = ${req.params.id}`)
    //res.send('list of all api');
    res.status(200).json(dbdata[0][0])
})

//http://localhost:4000/facilities/update_facility/12456 - PUT
router.put('/update_facility/:id', async (req, res) => {
    //fetch alist from db and then send
    const data_fe = req.body;
    const dbdata = await db.promise().query(`SELECT facilityname, facilitydescription FROM facilities WHERE facility_id = ${req.params.id}`)
    //res.send('list of all api');
    res.status(200).json(dbdata[0][0])
})

//http://localhost:4000/facilities/remove_facility/12456 - DELETE
router.delete('/remove_facility/:tempid', async (req, res) => {
    //fetch alist from db and then send
    const localid = req.params.tempid;
    const dbdata = await db.promise().query(`SELECT facilityname, facilitydescription FROM facilities WHERE facility_id = ${req.params.id}`)
    //res.send('list of all api');
    res.status(200).json(dbdata[0][0])
})


module.exports = router;



//CRUD
// fetch all list
// fetch by id
// add new
// update
// remove/delete



// Update
// data from fe to be -
// GET - by id / query paramaters - ?id=123&&srno=12345&&.............
// POST/PUT/DELETE - req.body / by id / query paramaters - ?id=123&&srno=12345