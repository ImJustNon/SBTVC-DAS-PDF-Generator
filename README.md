# SBTVC-DAS PDF Generator

### How to use

```asciidoc
Method     :: GET
Host       :: https://dorm-genpdf.fly.dev
Path       :: /generate/dorm-report
Params     :: 🔻
?prefix
?student_name
?student_lastname
?dorm_number
?room_number
?student_phone_number
?reg_type
?leave_date
?leave_time
?leave_for
?come_date
?come_time
?total_leave_date
?traveled_by
?parent_name
?parent_lastname
?parent_phone_number
?student_id
?back_in
?allow
?grade
```

### Example
```
https://dorm-genpdf.fly.dev/generate/dorm-report?prefix=นาย&student_name=สิทธิการ&student_lastname=เเป้นสูง&dorm_number=1&room_number=202&student_phone_number=0864092199&reg_type=INFORMATION_TECHNOLOGY&leave_date=18/08/2023&leave_time=18.00&leave_for=กลับบ้าน&come_date=19/08/2023&come_time=19.00&total_leave_date=1&traveled_by=ผู้ปกครองมารับ&parent_name=สุดา&parent_lastname=เเป้นสูง&parent_phone_number=0945659399&student_id=65202910022&back_in=false&allow=true&grade=2
```