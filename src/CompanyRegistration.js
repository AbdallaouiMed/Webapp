import React, { useState } from 'react';
import { Building, Hash, FileText, ClipboardList, Phone, Mail, User } from 'lucide-react';

const CompanyRegistration = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    registrationNumber: '',
    taxId: '',
    affiliationNumber: '',
    manager: {
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
    console.log('Données d\'enregistrement de l\'entreprise:', formData);
    // Ajoutez la logique de soumission du formulaire ici
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 pb-10">
      <div className="max-w-4xl mx-auto p-4">
        <div className="bg-white rounded-lg shadow-lg">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-center">Enregistrement d'Entreprise</h2>
          </div>

          <div className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Informations de l'entreprise */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Détails de l'Entreprise</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleChange}
                      placeholder="Nom de l'entreprise"
                      className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>

                  <div className="relative">
                    <FileText className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="registrationNumber"
                      value={formData.registrationNumber}
                      onChange={handleChange}
                      placeholder="Numéro d'enregistrement"
                      className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Hash className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="taxId"
                      value={formData.taxId}
                      onChange={handleChange}
                      placeholder="Numéro de TVA"
                      className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>

                  <div className="relative">
                    <ClipboardList className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="affiliationNumber"
                      value={formData.affiliationNumber}
                      onChange={handleChange}
                      placeholder="Numéro d'affiliation"
                      className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Informations du gestionnaire */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Détails du Gestionnaire</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="firstName"
                      value={formData.manager.firstName}
                      onChange={(e) => handleChange(e, 'manager')}
                      placeholder="Prénom"
                      className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>

                  <div className="relative">
                    <User className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.manager.lastName}
                      onChange={(e) => handleChange(e, 'manager')}
                      placeholder="Nom"
                      className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.manager.phone}
                      onChange={(e) => handleChange(e, 'manager')}
                      placeholder="Numéro de téléphone"
                      className="pl-10 w-full p-2 border rounded focus:ring-2 focus:ring-blue-500 outline-none"
                      required
                    />
                  </div>

                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.manager.email}
                      onChange={(e) => handleChange(e, 'manager')}
                      placeholder="Email"
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
                Enregistrer l'entreprise
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyRegistration;