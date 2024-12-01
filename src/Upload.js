import React, { useState } from 'react';
import { Upload, PlusCircle, Link as LinkIcon, X } from 'lucide-react';

const TrainingPlanUpload = () => {
  const [uploadMethod, setUploadMethod] = useState(null);
  const [file, setFile] = useState(null);
  const [apiConfig, setApiConfig] = useState({ url: '', key: '' });
  
  // Updated structure for manual entry
  const [manualEntries, setManualEntries] = useState([{
    id: 1,
    theme: '',
    location: {
      name: '',
      address: '',
      city: ''
    },
    groupNumber: '',
    learners: [''],
    trainer: '',
    duration: '',
    startDate: '',
    endDate: ''
  }]);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const isValidType = [
        'application/vnd.ms-excel',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        'text/csv'
      ].includes(file.type);

      if (isValidType) {
        setFile(file);
      } else {
        alert('Veuillez télécharger un fichier CSV ou Excel');
      }
    }
  };

  const addManualEntry = () => {
    setManualEntries([
      ...manualEntries,
      {
        id: manualEntries.length + 1,
        theme: '',
        location: {
          name: '',
          address: '',
          city: ''
        },
        groupNumber: '',
        learners: [''],
        trainer: '',
        duration: '',
        startDate: '',
        endDate: ''
      }
    ]);
  };

  const updateManualEntry = (id, field, value) => {
    setManualEntries(manualEntries.map(entry => {
      if (entry.id === id) {
        if (field.includes('.')) {
          const [parent, child] = field.split('.');
          return {
            ...entry,
            [parent]: {
              ...entry[parent],
              [child]: value
            }
          };
        }
        return { ...entry, [field]: value };
      }
      return entry;
    }));
  };

  const addLearner = (entryId) => {
    setManualEntries(manualEntries.map(entry => {
      if (entry.id === entryId) {
        return {
          ...entry,
          learners: [...entry.learners, '']
        };
      }
      return entry;
    }));
  };

  const updateLearner = (entryId, learnerIndex, value) => {
    setManualEntries(manualEntries.map(entry => {
      if (entry.id === entryId) {
        const newLearners = [...entry.learners];
        newLearners[learnerIndex] = value;
        return {
          ...entry,
          learners: newLearners
        };
      }
      return entry;
    }));
  };

  const removeLearner = (entryId, learnerIndex) => {
    setManualEntries(manualEntries.map(entry => {
      if (entry.id === entryId && entry.learners.length > 1) {
        return {
          ...entry,
          learners: entry.learners.filter((_, index) => index !== learnerIndex)
        };
      }
      return entry;
    }));
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Plan de Formation</h1>

      {/* Method Selection */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <button
          onClick={() => setUploadMethod('file')}
          className={`p-6 text-center rounded-lg border-2 transition-all ${
            uploadMethod === 'file' 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-200 hover:border-blue-300'
          }`}
        >
          <Upload className="w-8 h-8 mb-2 mx-auto text-blue-600" />
          <h3 className="font-semibold">Charger CSV ou Excel</h3>
        </button>

        <button
          onClick={() => setUploadMethod('manual')}
          className={`p-6 text-center rounded-lg border-2 transition-all ${
            uploadMethod === 'manual' 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-200 hover:border-blue-300'
          }`}
        >
          <PlusCircle className="w-8 h-8 mb-2 mx-auto text-blue-600" />
          <h3 className="font-semibold">Saisie Manuelle</h3>
        </button>

        <button
          onClick={() => setUploadMethod('api')}
          className={`p-6 text-center rounded-lg border-2 transition-all ${
            uploadMethod === 'api' 
              ? 'border-blue-500 bg-blue-50' 
              : 'border-gray-200 hover:border-blue-300'
          }`}
        >
          <LinkIcon className="w-8 h-8 mb-2 mx-auto text-blue-600" />
          <h3 className="font-semibold">Connexion API</h3>
        </button>
      </div>

      {/* Manual Entry Section */}
      {uploadMethod === 'manual' && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Saisie Manuelle</h2>
          <div className="space-y-8">
            {manualEntries.map((entry) => (
              <div key={entry.id} className="border rounded-lg p-6 space-y-4">
                {/* Theme */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Thème de formation
                  </label>
                  <input
                    type="text"
                    value={entry.theme}
                    onChange={(e) => updateManualEntry(entry.id, 'theme', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Location */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nom du lieu
                    </label>
                    <input
                      type="text"
                      value={entry.location.name}
                      onChange={(e) => updateManualEntry(entry.id, 'location.name', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Adresse
                    </label>
                    <input
                      type="text"
                      value={entry.location.address}
                      onChange={(e) => updateManualEntry(entry.id, 'location.address', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Ville
                    </label>
                    <input
                      type="text"
                      value={entry.location.city}
                      onChange={(e) => updateManualEntry(entry.id, 'location.city', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>

                {/* Group Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Numéro du groupe
                  </label>
                  <input
                    type="text"
                    value={entry.groupNumber}
                    onChange={(e) => updateManualEntry(entry.id, 'groupNumber', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Learners */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Liste des apprenants
                  </label>
                  <div className="space-y-2">
                    {entry.learners.map((learner, index) => (
                      <div key={index} className="flex gap-2">
                        <input
                          type="text"
                          value={learner}
                          onChange={(e) => updateLearner(entry.id, index, e.target.value)}
                          className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Nom de l'apprenant"
                        />
                        {entry.learners.length > 1 && (
                          <button
                            onClick={() => removeLearner(entry.id, index)}
                            className="p-2 text-red-600 hover:text-red-800"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        )}
                      </div>
                    ))}
                    <button
                      onClick={() => addLearner(entry.id)}
                      className="mt-2 inline-flex items-center px-3 py-1 text-sm text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100"
                    >
                      <PlusCircle className="w-4 h-4 mr-1" />
                      Ajouter un apprenant
                    </button>
                  </div>
                </div>

                {/* Trainer */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Nom du formateur
                  </label>
                  <input
                    type="text"
                    value={entry.trainer}
                    onChange={(e) => updateManualEntry(entry.id, 'trainer', e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>

                {/* Duration and Dates */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Nombre de jours
                    </label>
                    <input
                      type="number"
                      value={entry.duration}
                      onChange={(e) => updateManualEntry(entry.id, 'duration', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date de début
                    </label>
                    <input
                      type="date"
                      value={entry.startDate}
                      onChange={(e) => updateManualEntry(entry.id, 'startDate', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Date de fin
                    </label>
                    <input
                      type="date"
                      value={entry.endDate}
                      onChange={(e) => updateManualEntry(entry.id, 'endDate', e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>
                </div>
              </div>
            ))}

            <button
              onClick={addManualEntry}
              className="mt-4 inline-flex items-center px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100"
            >
              <PlusCircle className="w-4 h-4 mr-2" />
              Ajouter une formation
            </button>
          </div>
        </div>
      )}

      {/* File Upload Section */}
      {uploadMethod === 'file' && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Télécharger votre fichier</h2>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
            <input
              type="file"
              id="file-upload"
              className="hidden"
              accept=".csv,.xlsx,.xls"
              onChange={handleFileUpload}
            />
            <label 
              htmlFor="file-upload"
              className="cursor-pointer"
            >
              <Upload className="w-12 h-12 mx-auto mb-4 text-gray-400" />
              <p className="text-gray-600 mb-2">
                Glissez-déposez votre fichier ici ou
                <span className="text-blue-600 font-medium"> parcourir</span>
              </p>
              <p className="text-sm text-gray-500">
                Formats acceptés: .csv, .xlsx, .xls
              </p>
            </label>
            {file && (
              <div className="mt-4 p-4 bg-blue-50 text-blue-700 rounded-md">
                Fichier chargé: {file.name}
              </div>
            )}
          </div>
        </div>
      )}

      {/* API Connection Section */}
      {uploadMethod === 'api' && (
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">Configuration API</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                URL de l'API
              </label>
              <input
                type="url"
                value={apiConfig.url}
                onChange={(e) => setApiConfig({ ...apiConfig, url: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://api.example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Clé API
              </label>
              <input
                type="password"
                value={apiConfig.key}
                onChange={(e) => setApiConfig({ ...apiConfig, key: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Votre clé API"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              <LinkIcon className="w-4 h-4 mr-2" />
              Connecter
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default TrainingPlanUpload;



