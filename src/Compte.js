import React, { useRef, useState } from 'react';
import { Download, Calendar, TrendingUp } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const EmployeeDashboard = () => {
  const [certificates, setCertificates] = useState([
    { id: 1, title: "Gestion de Projet", date: "2024-10-15", url: "/certificates/gestion-projet.pdf" },
    { id: 2, title: "Management d'Équipe", date: "2024-11-01", url: "/certificates/management.pdf" }
  ]);

  // Create refs for file inputs
  const fileInputRefs = useRef({});

  const scheduledTrainings = [
    { id: 1, title: "Excel Avancé", date: "2024-12-15", status: "À venir" },
    { id: 2, title: "Communication Efficace", date: "2024-12-20", status: "À venir" },
    { id: 3, title: "Leadership", date: "2025-01-05", status: "À venir" }
  ];

  const skillProgressData = [
    { month: 'Jan', score: 65 },
    { month: 'Fév', score: 70 },
    { month: 'Mar', score: 75 },
    { month: 'Avr', score: 85 },
    { month: 'Mai', score: 82 },
    { month: 'Juin', score: 88 }
  ];

  const handleFileUpload = (certificateId, event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a URL for the uploaded file
      const fileUrl = URL.createObjectURL(file);
      
      // Update the certificate's URL in state
      setCertificates(prevCertificates =>
        prevCertificates.map(cert =>
          cert.id === certificateId
            ? { ...cert, url: fileUrl, fileName: file.name }
            : cert
        )
      );
    }
  };

  const handleUploadClick = (certificateId) => {
    // Trigger the hidden file input
    fileInputRefs.current[certificateId].click();
  };

  return (
    <div className="p-6 space-y-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Mon U</h1>

      {/* Formations programmées */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            <h2 className="text-xl font-bold">Formations Programmées</h2>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {scheduledTrainings.map((training) => (
              <div key={training.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold">{training.title}</h3>
                  <p className="text-sm text-gray-600">
                    {new Date(training.date).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                </div>
                <span className="px-3 py-1 text-sm bg-gray-200 text-gray-700 rounded-full">
                  {training.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Certificats */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Download className="h-5 w-5" />
            <h2 className="text-xl font-bold">Mes Certificats</h2>
          </div>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            {certificates.map((certificate) => (
              <div key={certificate.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-semibold">{certificate.title}</h3>
                  <p className="text-sm text-gray-600">
                    {new Date(certificate.date).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </p>
                  {certificate.fileName && (
                    <p className="text-sm text-blue-600 mt-1">
                      Fichier: {certificate.fileName}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="file"
                    ref={el => fileInputRefs.current[certificate.id] = el}
                    className="hidden"
                    onChange={(e) => handleFileUpload(certificate.id, e)}
                    accept=".pdf,.doc,.docx"
                  />
                  <button 
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors"
                    onClick={() => handleUploadClick(certificate.id)}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Télécharger
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Évolution des compétences */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-5 w-5" />
            <h2 className="text-xl font-bold">Évolution des Compétences</h2>
          </div>
        </div>
        <div className="p-6">
          <div className="h-64 mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={skillProgressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="score" 
                  stroke="#2563eb" 
                  strokeWidth={2}
                  name="Score moyen"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;