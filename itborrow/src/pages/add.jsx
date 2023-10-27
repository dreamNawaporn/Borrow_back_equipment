import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './add.css'


//URL เป็นตัวแปรที่ถูกกำหนดขึ้นเพื่อเก็บค่าที่มาจาก import.meta.env.VITE_BASE_URL.
const URL = import.meta.env.VITE_BASE_URL;
const USERNAME = import.meta.env.VITE_BASE_USERNAME;
const PASSWORD = import.meta.env.VITE_BASE_PASSWORD;

const config = {
    auth: {
        username: USERNAME,
        password: PASSWORD,
    },
};

const Add = () => {
    const navigate = useNavigate()
    // สร้าง state เพื่อเก็บข้อมูลรายการ
    const [menu, setMenu] = useState({
        name: 'name',
        img: 'img',

    });

    const [updateSuccess, setUpdateSuccess] = useState(false); // เพิ่ม state สำหรับการแจ้งเตือนการอัปเดตสำเร็จ

    // ฟังก์ชันเมื่อข้อมูลรายการเปลี่ยนแปลง
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setMenu({
            ...menu,
            [name]: value,
        });
    };

    const handleAddMenu = async () => {
        try {
            const response = await axios.post(`${URL}/res`, menu, config);
            console.log('เพิ่มรายการแล้ว:', response.data);
            setUpdateSuccess(true);
        } catch (error) {
            console.error('เกิดข้อผิดพลาดในการเพิ่มรายการ:', error);
        }
    };

    const handleCancel = () => {
        navigate('/')
    };

    return (
        <div>
            <h2 className="text-center">add</h2>
            {updateSuccess && ( // แสดงข้อความเมื่ออัปเดตสำเร็จ
                <div className="alert alert-success form-label" role="alert">
                    เพิ่มรายการแล้ว!
                </div>
            )}
            <form className="container-sm">
                <div className="mb-3">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            ชื่อรายการ:
                        </label>
                        <input
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Restaurant name"
                        />
                    </div>
                    <div className="mb-3">
                        <label className='form-label'>ตัวอย่างรูปภาพ:</label>
                        <br />
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <button type="button" className="btn btn-success form-control" onClick={handleAddMenu}>
                        เพิ่มรายการ
                    </button>
                    <button type="button" className="btn btn-danger form-control" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default add;