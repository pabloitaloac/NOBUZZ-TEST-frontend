import React, { useState, useEffect } from 'react';

import './Login.css'

export default function () {
    return ( 
        <div className="form">
            <form>
            <div className="input-container">
                <label>Username </label>
                <input type="text" name="uname" required />
                {'error?'}
            </div>
            <div className="input-container">
                <label>Password </label>
                <input type="password" name="pass" required />
                {'error?'}
            </div>
            <input type="submit" className='button-container'/>
            </form>
        </div>
     );
}