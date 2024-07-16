import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../assets/css/profile.css';

function UserProfile() {
  const [users, setUsers] = useState([
    { id: 1, name: 'John Cooper', company: 'Microsoft', phone: '(225) 555-0189', email: 'john@microsoft.com', country: 'United States' },
    { id: 2, name: 'Floyd Miles', company: 'Yahoo', phone: '(205) 555-0100', email: 'floyd@yahoo.com', country: 'Germany' },
    { id: 3, name: 'Ronald Richards', company: 'Adobe', phone: '(302) 555-0120', email: 'ronald@adobe.com', country: 'Israel' },
    { id: 4, name: 'Marvin McKinney', company: 'Twilio', phone: '(252) 555-0126', email: 'marvin@twilio.com', country: 'Iran' },
    { id: 5, name: 'Jerome Bell', company: 'Google', phone: '(317) 555-0110', email: 'jerome@google.com', country: 'Russia' },
  ]);

  const [editingUser, setEditingUser] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleEditClick = (user) => {
    setEditingUser(user);
  };

  const handleDeleteClick = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleSaveClick = () => {
    setUsers(users.map(user => (user.id === editingUser.id ? editingUser : user)));
    setEditingUser(null);
  };

  const handleAddClick = () => {
    setShowAddForm(true);
  };

  const handleAddSaveClick = (newUser) => {
    setUsers([...users, { id: users.length + 1, ...newUser }]);
    setShowAddForm(false);
  };

  const handleCancelClick = () => {
    setEditingUser(null);
    setShowAddForm(false);
  };

  return (
    <div className="profile-container">
      <div className="sidebar">
        <div className="profile-info">
          <img src="/src/assets/images/Cristian.jpg" alt="Profile" className="profile-picture" />
          <h3>Cristian O</h3>
          <p>ovandogomez@gmail.com <Link to="/" className="back-to-login">REGRESAR</Link></p>
        </div>
        <ul className="menu">
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li className="active"><Link to="/users">Users</Link></li>
          <li><Link to="/wallets">Wallets</Link></li>
          <li><Link to="/summary">Summary</Link></li>
          <li><Link to="/accounts">Accounts</Link></li>
          <li><Link to="/settings">Settings</Link></li>
        </ul>
      </div>
      <div className="main-content">
        <div className="header">
          <h2>Users <button onClick={handleAddClick} className="add-user-button">+</button></h2>
          <div className="user-icons">
            <img src="/path/to/user1.jpg" alt="User1" className="user-icon" />
            <img src="/path/to/user2.jpg" alt="User2" className="user-icon" />
            <img src="/path/to/user3.jpg" alt="User3" className="user-icon" />
            <img src="/path/to/user4.jpg" alt="User4" className="user-icon" />
          </div>
        </div>
        {showAddForm ? (
          <div className="form-container">
            <h3>Add User</h3>
            <label>Name: <input type="text" onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })} /></label>
            <label>Company: <input type="text" onChange={(e) => setEditingUser({ ...editingUser, company: e.target.value })} /></label>
            <label>Phone: <input type="text" onChange={(e) => setEditingUser({ ...editingUser, phone: e.target.value })} /></label>
            <label>Email: <input type="text" onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })} /></label>
            <label>Country: <input type="text" onChange={(e) => setEditingUser({ ...editingUser, country: e.target.value })} /></label>
            <button onClick={() => handleAddSaveClick(editingUser)} className="save-button">Save</button>
            <button onClick={handleCancelClick} className="cancel-button">Cancel</button>
          </div>
        ) : editingUser ? (
          <div className="form-container">
            <h3>Edit User</h3>
            <label>Name: <input type="text" value={editingUser.name} onChange={(e) => setEditingUser({ ...editingUser, name: e.target.value })} /></label>
            <label>Company: <input type="text" value={editingUser.company} onChange={(e) => setEditingUser({ ...editingUser, company: e.target.value })} /></label>
            <label>Phone: <input type="text" value={editingUser.phone} onChange={(e) => setEditingUser({ ...editingUser, phone: e.target.value })} /></label>
            <label>Email: <input type="text" value={editingUser.email} onChange={(e) => setEditingUser({ ...editingUser, email: e.target.value })} /></label>
            <label>Country: <input type="text" value={editingUser.country} onChange={(e) => setEditingUser({ ...editingUser, country: e.target.value })} /></label>
            <button onClick={handleSaveClick} className="save-button">Save</button>
            <button onClick={handleCancelClick} className="cancel-button">Cancel</button>
          </div>
        ) : (
          <div className="user-table">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Company</th>
                  <th>Phone Number</th>
                  <th>Email</th>
                  <th>Country</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id}>
                    <td>{user.name}</td>
                    <td>{user.company}</td>
                    <td>{user.phone}</td>
                    <td>{user.email}</td>
                    <td>{user.country}</td>
                    <td>
                      <button onClick={() => handleEditClick(user)} className="edit-button">Edit</button>
                      <button onClick={() => handleDeleteClick(user.id)} className="delete-button">Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

export default UserProfile;
