import React from 'react';

export default function PopUp({ onClose }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-2xl shadow-xl w-[90%] max-w-sm text-center">
                <p className="text-gray-600 mb-4">
                    I'm <span className=' name font-bold'>Sonu Maddheshiya</span>, a passionate Full Stack Developer with a love for clean code,
                    intuitive UI, and scalable backend systems. Whether it’s building responsive React interfaces,
                    crafting seamless Node.js APIs, or designing efficient MongoDB schemas, 
                </p>
                <p className="text-gray-600 mb-6">
                    This portfolio showcases my latest projects — from interactive UI/UX designs to backend-driven web applications —
                    each built with dedication and detail. If you're looking for a developer to bring your idea to life
                    or collaborate on a freelance project. Let’s build something awesome together! 🚀
                </p>
                <button
                    onClick={onClose}
                    className="bg-blue-600 hover:bg-blue-800 text-white px-5 py-2 rounded-full transition-all duration-200"
                >
                    Close
                </button>
            </div>
        </div>
    );
}


