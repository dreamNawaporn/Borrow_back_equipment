import React from 'react';

function Login() {
    return (
      <div>
        <h2>เข้าสู่ระบบ</h2>
        <form>
          <div className="form-group">
            <label htmlFor="username">ชื่อผู้ใช้:</label>
            <input type="text" id="username" name="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">รหัสผ่าน:</label>
            <input type="password" id="password" name="password" />
          </div>
          <button type="submit">เข้าสู่ระบบ</button>
        </form>
      </div>
    );
  }

  
 