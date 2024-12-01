import React, { useState } from 'react';
import { 
  ChevronDown, 
  Calendar, 
  Building2, 
  CheckCircle2, 
  Clock, 
  FileSpreadsheet,
  User 
} from 'lucide-react';

const ProgrammationFormation = () => {
  const [selectedTraining, setSelectedTraining] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedAgency, setSelectedAgency] = useState(null);
  const [selectedTrainer, setSelectedTrainer] = useState(null);

  // Données fictives (seraient récupérées via une API dans une vraie application)
  const formations = [
    { id: 1, name: 'Fondamentaux du Leadership', departement: 'Management' },
    { id: 2, name: 'Marketing Digital Avancé', departement: 'Marketing' },
    { id: 3, name: 'Essentiels de la Cybersécurité', departement: 'Informatique' }
  ];

  const agences = [
    { id: 1, name: 'Conseil ProLearn', fourchettePrix: '500€-1000€', notation: 4.5 },
    { id: 2, name: 'Académie SkillBoost', fourchettePrix: '600€-1200€', notation: 4.2 },
    { id: 3, name: 'Solutions de Formation Elite', fourchettePrix: '750€-1500€', notation: 4.7 }
  ];

  const formateurs = [
    { id: 1, name: 'Jean Dupont', specialite: 'Leadership', experience: '10 ans' },
    { id: 2, name: 'Marie Leclerc', specialite: 'Marketing Digital', experience: '8 ans' },
    { id: 3, name: 'Pierre Martin', specialite: 'Cybersécurité', experience: '12 ans' }
  ];

  const statuts = [
    { id: 1, name: 'Demande envoyée au cabinet', icon: Clock, color: 'text-yellow-500' },
    { id: 2, name: 'En cours de validation', icon: CheckCircle2, color: 'text-blue-500' },
    { id: 3, name: 'Programmée', icon: Calendar, color: 'text-green-500' }
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      <div className="w-full max-w-6xl">
        <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center">Programmation des Formations</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
          {/* Sélection de Formation */}
          <div className="bg-white shadow rounded-lg w-full max-w-xs mx-auto">
            <div className="p-4 border-b flex items-center">
              <FileSpreadsheet className="mr-2" /> 
              <h2 className="font-semibold">Choisir une Formation</h2>
            </div>
            <div className="p-4">
              <select 
                className="w-full p-2 border rounded"
                onChange={(e) => setSelectedTraining(
                  formations.find(f => f.id === Number(e.target.value))
                )}
              >
                <option>Sélectionner une Formation</option>
                {formations.map(formation => (
                  <option key={formation.id} value={formation.id}>
                    {formation.name} - {formation.departement}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sélection de Date */}
          <div className="bg-white shadow rounded-lg w-full max-w-xs mx-auto">
            <div className="p-4 border-b flex items-center">
              <Calendar className="mr-2" /> 
              <h2 className="font-semibold">Sélectionner une Date</h2>
            </div>
            <div className="p-4">
              <input 
                type="date" 
                className="w-full p-2 border rounded"
                onChange={(e) => setSelectedDate(e.target.value)}
              />
            </div>
          </div>

          {/* Sélection d'Agence */}
          <div className="bg-white shadow rounded-lg w-full max-w-xs mx-auto">
            <div className="p-4 border-b flex items-center">
              <Building2 className="mr-2" /> 
              <h2 className="font-semibold">Agence de Formation</h2>
            </div>
            <div className="p-4">
              <select 
                className="w-full p-2 border rounded"
                onChange={(e) => setSelectedAgency(
                  agences.find(a => a.id === Number(e.target.value))
                )}
              >
                <option>Sélectionner une Agence</option>
                {agences.map(agence => (
                  <option key={agence.id} value={agence.id}>
                    {agence.name} - {agence.fourchettePrix}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Sélection de Formateur */}
          <div className="bg-white shadow rounded-lg w-full max-w-xs mx-auto">
            <div className="p-4 border-b flex items-center">
              <User className="mr-2" /> 
              <h2 className="font-semibold">Choisir un Formateur</h2>
            </div>
            <div className="p-4">
              <select 
                className="w-full p-2 border rounded"
                onChange={(e) => setSelectedTrainer(
                  formateurs.find(f => f.id === Number(e.target.value))
                )}
              >
                <option>Sélectionner un Formateur</option>
                {formateurs.map(formateur => (
                  <option key={formateur.id} value={formateur.id}>
                    {formateur.name} - {formateur.specialite} ({formateur.experience})
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Section Statut */}
        <div className="mt-6 flex flex-col items-center">
          <h2 className="text-2xl font-semibold mb-4 text-center">Statut de la Formation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl">
            {statuts.map((statut) => (
              <div 
                key={statut.id} 
                className={`p-4 border rounded flex items-center ${statut.color} bg-white shadow-sm`}
              >
                <statut.icon className="mr-3" />
                <span>{statut.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bouton d'Action */}
        <div className="mt-6 text-center">
          <button 
            disabled={!(selectedTraining && selectedDate && selectedAgency && selectedTrainer)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Programmer la Formation
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProgrammationFormation;