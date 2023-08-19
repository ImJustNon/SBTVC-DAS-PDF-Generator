const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const urlEncoded = bodyParser.urlencoded({
    limit: '50mb',
    extended: true,
});

router.get('/generate/dorm-report', urlEncoded, async(req, res) =>{
    const { 
        prefix, 
        student_name,
        student_lastname,
        dorm_number,
        room_number,
        student_phone_number,
        reg_type,
        leave_date,
        leave_time,
        leave_for,
        come_date,
        come_time,
        total_leave_date,
        traveled_by,
        parent_name,
        parent_lastname,
        parent_phone_number,
        student_id,
        back_in,
        allow,
        grade,
    } = req.query ?? {};

    /* 
    let getTime = (dateNum) =>{
        if(!isNaN(dateNum)){
            let date = new Date(parseInt(dateNum)).toLocaleString('en', {timeZone: 'Asia/Bangkok'});
            let dateFormat = date.trim().split(/ +/g);
            return (dateFormat[1] + " " + dateFormat[2]);
        }
        return "NaN";
    }
    */
    
    res.render("dorm_report.ejs", {
        
        data: {
            prefix: String(prefix  || ""),
            student_name: String(student_name || ""),
            student_lastname: String(student_lastname || ""),
            dorm_number: String(dorm_number || ""),
            room_number: String(room_number || ""),
            student_phone_number: String(student_phone_number || ""),
            reg_type: String(reg_type || ""),
            leave_date: String(leave_date || ""),
            leave_time: String(leave_time || ""),
            leave_for: String(leave_for || ""),
            come_date: String(come_date || ""),
            come_time: String(come_time || ""),
            total_leave_date: String(total_leave_date || ""),
            traveled_by: String(traveled_by || ""),
            parent_name: String(parent_name || ""),
            parent_lastname: String(parent_lastname || ""),
            parent_phone_number: String(parent_phone_number || ""),
            student_id: String(student_id),
            back_in: String(back_in),
            allow: String(allow),
            grade: String(grade) || "ปวช.",
        },
    });
});

module.exports = router;



/*
        data: {
            prefix: "นาย",
            student_name: "คณกร",
            student_lastname: "ไทยประโคน",
            dorm_number: "3",
            room_number: "403",
            student_phone_number: "0864092162",
            reg_type: "เทคโนโลยีสารสนเทศ",
            leave_date: "30/02/66",
            leave_time: "19:56",
            leave_for: "กลับบ้าน",
            come_date: "31/02/66", 
            come_time: "20:00",
            total_leave_date: "1",
            traveled_by: "ผู้ปกครองมารับ",
            parent_name: "สุมาลี",
            parent_lastname: "จันทร์จินดา",
            parent_phone_number: "0945659339",
            student_id: "65202910002",
            back_in: "true",
            allow: "true",
            grade: "ปวช.",
        },
*/