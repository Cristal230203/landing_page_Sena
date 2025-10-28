import React, { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    mensaje: ''
  });

  const programas = [
    'ADSO',
    'REDES DE DATOS',
    'ANIMACION 3D',
    'LOGISTICA',
    'MERCADEO',
    'SISTEMAS'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Mensaje enviado:\nNombres: ${formData.nombres}\nApellidos: ${formData.apellidos}\nMensaje: ${formData.mensaje}`);
    setFormData({ nombres: '', apellidos: '', mensaje: '' });
  };

  return (
    <div style={{
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: '#f5f5f5'
    }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#39a900',
        padding: '15px 40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
      }}>
        <div style={{
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}>
          <img 
            src="https://senacertificados.co/wp-content/uploads/2021/10/2090px-Sena_Colombia_logo.svg_.png" 
            alt="Logo SENA" 
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover'
            }}
          />
        </div>
        <nav style={{
          display: 'flex',
          gap: '30px'
        }}>
          <a href="#inicio" style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px'
          }}>INICIO</a>
          <a href="#programas" style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px'
          }}>PROGRAMAS</a>
          <a href="#contacto" style={{
            color: 'white',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '16px'
          }}>CONTACTO</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" style={{
        backgroundColor: 'white',
        textAlign: 'center',
        padding: '60px 20px',
        borderBottom: '3px solid #39a900'
      }}>
        <h1 style={{
          fontSize: '32px',
          color: '#333',
          margin: '10px 0',
          fontWeight: 'normal'
        }}>SERVICIO NACIONAL DE APRENDIZAJE</h1>
        <h2 style={{
          fontSize: '28px',
          color: '#39a900',
          margin: '10px 0',
          fontWeight: 'bold'
        }}>CGMLTI</h2>
        <h3 style={{
          fontSize: '24px',
          color: '#666',
          margin: '10px 0',
          fontWeight: 'normal'
        }}>BOGOTÁ</h3>
      </section>

      {/* Programas Section */}
      <section id="programas" style={{
        padding: '60px 40px',
        backgroundColor: '#f5f5f5'
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          {programas.map((programa, index) => (
            <div key={index} style={{
              backgroundColor: 'white',
              padding: '40px 20px',
              borderRadius: '15px',
              textAlign: 'center',
              fontSize: '18px',
              fontWeight: 'bold',
              color: '#333',
              border: '2px solid #e0e0e0',
              cursor: 'pointer',
              transition: 'all 0.3s',
              boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-5px)';
              e.currentTarget.style.borderColor = '#39a900';
              e.currentTarget.style.boxShadow = '0 5px 15px rgba(57,169,0,0.2)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = '#e0e0e0';
              e.currentTarget.style.boxShadow = '0 2px 5px rgba(0,0,0,0.05)';
            }}>
              {programa}
            </div>
          ))}
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" style={{
        padding: '60px 40px',
        backgroundColor: 'white'
      }}>
        <h2 style={{
          textAlign: 'center',
          fontSize: '32px',
          color: '#333',
          marginBottom: '40px',
          fontWeight: 'bold'
        }}>CONTACTO</h2>
        <div style={{
          maxWidth: '500px',
          margin: '0 auto'
        }}>
          <input
            type="text"
            name="nombres"
            placeholder="NOMBRES"
            value={formData.nombres}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '15px',
              marginBottom: '20px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
          <input
            type="text"
            name="apellidos"
            placeholder="APELLIDOS"
            value={formData.apellidos}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '15px',
              marginBottom: '20px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '16px',
              boxSizing: 'border-box'
            }}
          />
          <textarea
            name="mensaje"
            placeholder="MENSAJE"
            value={formData.mensaje}
            onChange={handleChange}
            style={{
              width: '100%',
              padding: '15px',
              marginBottom: '20px',
              border: '2px solid #e0e0e0',
              borderRadius: '8px',
              fontSize: '16px',
              minHeight: '120px',
              boxSizing: 'border-box',
              resize: 'vertical',
              fontFamily: 'Arial, sans-serif'
            }}
          />
          <button
            onClick={handleSubmit}
            style={{
              backgroundColor: '#39a900',
              color: 'white',
              padding: '15px 50px',
              border: 'none',
              borderRadius: '8px',
              fontSize: '18px',
              fontWeight: 'bold',
              cursor: 'pointer',
              display: 'block',
              margin: '0 auto',
              transition: 'background-color 0.3s'
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#2d7f00'}
            onMouseLeave={(e) => e.target.style.backgroundColor = '#39a900'}
          >
            ENVIAR
          </button>
        </div>
      </section>
    </div>
  );
}

export default App;