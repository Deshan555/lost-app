import React from 'react';
import { capitalize } from 'lodash';

const LostRecordCard = ({ record }) => {
  const imageUrl =
    record.image_url ||
    'https://lh3.googleusercontent.com/aida-public/AB6AXuA41hw7KKXDZSI3n9dG2NmSPe_2Lz9o47pzFGD-Zl2I_HQePMgq2JJCbSYGFXyHUJnhXyKv1xsnCJU0I-GyjSsiQhlQ8rl77kmWJ1lNUKW6YUKRl24qIH1w5f0BmYJm9lgTtkGSRx4ieh-dY4phqByH4eY9cmdOIaHLDIL8LkUykxHIIqFdK9thtZ4-0nkEL9lzmR0LooxTBxTOxaItSF6X-G3J12mNcCOiyX0ioSy85R-teD66XnRdpcA-FQOBKPUGV8fEBGQbURyB';

  return (
    <div className="w-full max-w-3xl overflow-hidden rounded-xl shadow-md bg-white transition hover:shadow-lg">
      <div
        className="h-64 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      <div className="p-6 space-y-6 font-geist-sans bg-slate-50">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">
            {capitalize(record.item_type)}
          </h2>
          <p className="text-sm text-slate-500 mt-1">Lost on {record.date_lost}</p>
        </div>

        {record.description && (
          <p className="text-sm text-slate-700">{record.description}</p>
        )}

        <div className="grid grid-cols-[30%_1fr] gap-y-4 gap-x-6 border-t border-slate-200 pt-4 text-sm">
          <span className="text-slate-500">Location Lost</span>
          <span className="text-slate-800">{record.location_lost}</span>

          <span className="text-slate-500">Remarks</span>
          <span className="text-slate-800">{record.remarks || 'N/A'}</span>

          <span className="text-slate-500">Status</span>
          <span className="text-slate-800">{capitalize(record.status)}</span>

          <span className="text-slate-500">Reward</span>
          <span className="text-slate-800">
            {record.reward ? `$${record.reward}` : 'None'}
          </span>
        </div>

        <div className="flex justify-end">
          <button className="bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-sm hover:bg-blue-700 transition">
            Contact Finder
          </button>
        </div>
      </div>
    </div>
  );
};

export default LostRecordCard;
