
export const Header = () => {
  return (
    <div className="text-center mb-12">
      <div className="flex items-center justify-center mb-6">
        <img 
          src="/lovable-uploads/04e1d5d9-82bc-4fbd-923c-21ef66f76a35.png" 
          alt="aXtrLabs Logo" 
          className="w-20 h-20 mr-4 logo-glow animate-pulse-glow"
        />
        <h1 className="text-5xl md:text-6xl font-bold text-white logo-glow">
          aXtr<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">Labs</span>
        </h1>
      </div>
      <p className="text-xl text-gray-300 max-w-2xl mx-auto animate-pulse-glow">
        Transform your business with cutting-edge AI solutions. Let's discuss your next breakthrough project.
      </p>
    </div>
  );
};
