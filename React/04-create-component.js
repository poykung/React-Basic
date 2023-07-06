/* 
การสร้าง component

ใน react การสร้างหน้าเว็บขึ้นมาได้จะใช้สิ่งที่เรียกว่า component โดย component คือส่วนย่อยแต่ละส่วนของหน้าเว็บที่นำมาประกอบกัน
โดยจะเขียนด้วยภาษา javascirpt เพื่อทำหน้าตาแต่ละส่วนของ web หรือส่วนย่อยนั้นๆ มาแทนที่จะเขียนใน html แทน

แต่ใน react จะไม่เขียน html ใน html แต่จะเขียนใน javascript แทนซึ่งเรียกว่า JSX (Javascript XML) ที่ทำให้ส่วน html
เข้าไปเขียนใน javascript ได้ ดั้งนั้น react คือ การสร้างหน้าเว็บด้วยภาษา javascirpt ที่มี html แทรกอยู่ก็คือ JSX

รูปแบบการสร้าง

Class component
Funtional component
โดยทั้งคู่จะ return html ออกมาและเขียน JSX ด้านในส่วนของการ return

--Funtional component
สร้างแบบ component คือ เป็นรูปแบบ function โดยสร้าง function ธรรมดาๆ และ return html ออกมาโดยให้ตัวอักษรแรกของชื่อ function
เป็นตัวพิมพ์ใหญ่เสมอ เช่น

function HelloComponent(){
    return <h1>Hello React</h1>;
}
ReactDOM.render(<HelloComponent>),document.getELementByID('root');
{ ตัวอย่าง 
function HelloComponent(){
  return <h1>Hello Component นะนะ</h1>
}
}


--Class component
สร้าง class ที่ extends มาจาก react.component และ return html ออกมาแต่ถ้าสร้างเป็นแบบ class จะมีความสามารถใช้งานมากกว่าแบบ functional
class HelloComponent extends React.Component{
    render(){
        return <h1>Hello React</h1>
    }
}
ReactDOM.render(<HelloComponent/>),document.getELementByID('root');
{ ตัวอย่าง
class HelloComponent extends React.Component{
  render(){
    return <h1>Hi Component</h1>
  }
}
}

สามารถสร้าง component ด้านนอกและ import file component เข้ามาใช้งานได้เพื่อให้ project เป็นระเบียบ

--import
import HelloComponent from './component/HelloComponent';
--export
export default HelloComponent


*/