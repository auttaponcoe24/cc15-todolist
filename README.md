# 1 Setup Project

-   `npx create-react-app <project-name>`
-   `cd <project-name>`
-   `npm start` or `npm run start` or `npx react-scripts start`
-   auto open browser localhost:3000

# 2 About Project

-   Other code เรียกว่า Dependencies อยู่ใน node_modules

    -   ลบทิ้งได้
    -   ติดตั้งใหม่ด้วย `npm install` จะทำการติดตั้ง dependencies ที่อยู่ใน package.json ให้อัตโนมัติ

-   Code เราเอง อยู่ใน src/

# 3 : Clean up Project - remove unnecessary thing

clean up index.js
clean up App.js, App.css
clean up public/index.html
remove unnecessary file
restructure folder to app/ component/

# 4 : CSS setup

#### 4.1 : ติดตั้ง scss

ติดตั้ง sass เพื่อช่วยให้การเขียน CSS แบบ BEM สะดวกมากขึ้น
รันคำสั่ง npm install sass ลงใน terminal (อย่าลืม check path ว่าอยู่ที่ root project แล้ว : ตำแหน่งที่มี file package.json)
ตรวจสอบ dependencies ในไฟล์ package.json ว่ามี sass แล้ว

#### 4.2 : setup index.scss

ไฟล์ index.css : ให้แปลงนามสกุลไฟล์ เป็น index.scss
ไฟล์ index.js : เปลี่ยนการ import จาก index.css เป็น index.scss

#### 4.3 : CSS Global Reset

ไฟล์ index.scss : เขียน css rule เพื่อลบ default padding,margin ต่างๆ รวมถึงวิธีการวัดขนาดของ Box-model

ไฟล์ index.scss : ทำการเพิ่ม font หลักของ application (Nunito) ลงใน tag body

#### 4.5 : Color

knowledge : scss มีความสามารถในการสร้างตัวแปรไว้ใช้ได้
ไฟล์ index.scss : สร้างตัวแปรสำหรับเก็บสีหลักๆของ web-application
