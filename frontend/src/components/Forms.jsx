import React from 'react';

const FormComponent = ({ children, title }) => {
  return (
    <div className="w-full h-auto rounded-lg border-0 border-slate-50 shadow-inner shadow-rose-50 mix-blend-normal p-4">
      {title && <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>}
      <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {children}
      </form>
    </div>
  );
};

export default FormComponent;