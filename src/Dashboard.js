import React, { useState } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { 
  BookOpen, 
  Users, 
  Building2, 
  TrendingUp, 
  DollarSign 
} from 'lucide-react';

const TableauDeBord = () => {
  // Données fictives pour les différents tableaux de bord
  const [dashboardData] = useState({
    formationsParEntreprise: [
      { name: 'Total Formations', valeur: 42 },
      { name: 'Formations Terminées', valeur: 35 },
      { name: 'Formations en Cours', valeur: 7 }
    ],
    formationsParDepartement: [
      { name: 'Management', formations: 12 },
      { name: 'Marketing', formations: 8 },
      { name: 'Informatique', formations: 10 },
      { name: 'Ressources Humaines', formations: 6 },
      { name: 'Finances', formations: 6 }
    ],
    formationsParSalarie: [
      { name: 'Jean Dupont', formations: 5 },
      { name: 'Marie Leclerc', formations: 4 },
      { name: 'Pierre Martin', formations: 3 },
      { name: 'Sophie Dubois', formations: 3 },
      { name: 'Autres', formations: 27 }
    ],
    formationsParCabinet: [
      { name: 'ProLearn Consulting', formations: 15 },
      { name: 'SkillBoost Academy', formations: 12 },
      { name: 'Elite Training', formations: 10 },
      { name: 'Autres Cabinets', formations: 5 }
    ],
    donneesFinancieres: {
      totalInvesti: 75000,
      remboursementOPFTT: 22500,
      resteACharge: 52500
    }
  });

  // Couleurs pour les graphiques
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  return (
    <div className="container mx-auto p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Tableau de Bord des Formations
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Tableau de Bord Général de l'Entreprise */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <BookOpen className="mr-2" /> Vue Globale des Formations
          </h2>
          <BarChart width={300} height={200} data={dashboardData.formationsParEntreprise}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="valeur" fill="#8884d8" />
          </BarChart>
        </div>

       {/* Tableau de Bord par Département - Expanded */}
<div className="bg-white shadow rounded-lg p-6 lg:col-span-2 flex flex-col">
  <h2 className="text-xl font-semibold mb-4 flex items-start self-start">
    <Building2 className="mr-2" /> Formations par Département
  </h2>
  <div className="flex justify-center items-center h-full">
    <PieChart width={500} height={300}>
      <Pie
        data={dashboardData.formationsParDepartement}
        cx={250}
        cy={150}
        labelLine={false}
        outerRadius={120}
        fill="#8884d8"
        dataKey="formations"
        label={({ name, formations }) => `${name}: ${formations}`}
      >
        {dashboardData.formationsParDepartement.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  </div>
</div>

{/* Tableau de Bord par Salarié - Expanded */}
<div className="bg-white shadow rounded-lg p-6 lg:col-span-2 flex flex-col">
  <h2 className="text-xl font-semibold mb-4 flex items-center self-start">
    <Users className="mr-2" /> Formations par Salarié
  </h2>
  <div className="flex justify-center items-center h-full">
    <PieChart width={500} height={300}>
      <Pie
        data={dashboardData.formationsParSalarie}
        cx={250}
        cy={150}
        labelLine={false}
        outerRadius={120}
        fill="#8884d8"
        dataKey="formations"
        label={({ name, formations }) => `${name}: ${formations}`}
      >
        {dashboardData.formationsParSalarie.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  </div>
</div>

{/* Tableau de Bord des Formations par Cabinets */}
<div className="bg-white shadow rounded-lg p-10 flex flex-col">
  <h2 className="text-xl font-semibold mb-4 flex items-center self-start">
    <TrendingUp className="mr-2" /> Formations par Cabinet
  </h2>
  <div className="flex justify-center items-center h-fill">
    <PieChart width={350} height={300}>
      <Pie
        data={dashboardData.formationsParCabinet}
        cx={150}
        cy={100}
        labelLine={false}
        outerRadius={80}
        fill="#8884d8"
        dataKey="formations"
        label={({ name, formations }) => `${name}: ${formations}`}
      >
        {dashboardData.formationsParCabinet.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  </div>
</div>

        {/* Tableau de Bord Financier */}
        <div className="bg-white shadow rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <DollarSign className="mr-2" /> Rapport Financier
          </h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Total Investi</span>
              <span className="font-bold text-green-600">
                {dashboardData.donneesFinancieres.totalInvesti.toLocaleString()} €
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Remboursement OPFTT</span>
              <span className="font-bold text-blue-600">
                {dashboardData.donneesFinancieres.remboursementOPFTT.toLocaleString()} €
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Reste à Charge</span>
              <span className="font-bold text-red-600">
                {dashboardData.donneesFinancieres.resteACharge.toLocaleString()} €
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TableauDeBord;