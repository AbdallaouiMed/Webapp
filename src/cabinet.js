import React, { useState } from 'react';
import { User, Building2, Phone, Mail, FileText, Hash, Receipt, ClipboardList } from 'lucide-react';

const Cabinet = () => {
  const [formData, setFormData] = useState({
    socialName: '',
    rc: '',
    ice: '',
    cnssNumber: '',
    profTax: '',
    projectManager: {
      firstName: '',
      lastName: '',
      phone: '',
      email: ''
    },
    user: {
      firstName: '',
      lastName: '',
      phone: '',
      email: ''
    }
  });

  const handleChange = (e, section = null) => {
    const { name, value } = e.target;
    
    if (section) {
      setFormData(prev => ({
        ...prev,
        [section]: {
          ...prev[section],
          [name]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-center">Saisie des cabinets de formation</h2>
          </div>
          
          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Cabinet Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Informations du cabinet</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Building2 className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="socialName"
                      value={formData.socialName}
                      onChange={handleChange}
                      placeholder="Dénomination sociale"
                      className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>

                  <div className="relative">
                    <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="rc"
                      value={formData.rc}
                      onChange={handleChange}
                      placeholder="RC"
                      className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Hash className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="ice"
                      value={formData.ice}
                      onChange={handleChange}
                      placeholder="ICE"
                      className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>

                  <div className="relative">
                    <ClipboardList className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="cnssNumber"
                      value={formData.cnssNumber}
                      onChange={handleChange}
                      placeholder="Numéro d'affiliation CNSS"
                      className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Receipt className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="profTax"
                      value={formData.profTax}
                      onChange={handleChange}
                      placeholder="Taxe professionnelle"
                      className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Project Manager Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Responsable projet FORMATION</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.projectManager.firstName}
                      onChange={(e) => handleChange(e, 'projectManager')}
                      placeholder="Nom"
                      className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>

                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.projectManager.lastName}
                      onChange={(e) => handleChange(e, 'projectManager')}
                      placeholder="Prénom"
                      className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.projectManager.phone}
                      onChange={(e) => handleChange(e, 'projectManager')}
                      placeholder="Téléphone"
                      className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.projectManager.email}
                      onChange={(e) => handleChange(e, 'projectManager')}
                      placeholder="Courriel"
                      className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* User Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Utilisateur</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.user.firstName}
                      onChange={(e) => handleChange(e, 'user')}
                      placeholder="Nom"
                      className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>

                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.user.lastName}
                      onChange={(e) => handleChange(e, 'user')}
                      placeholder="Prénom"
                      className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.user.phone}
                      onChange={(e) => handleChange(e, 'user')}
                      placeholder="Téléphone"
                      className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.user.email}
                      onChange={(e) => handleChange(e, 'user')}
                      placeholder="Courriel"
                      className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors duration-200"
              >
                Enregistrer
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cabinet;