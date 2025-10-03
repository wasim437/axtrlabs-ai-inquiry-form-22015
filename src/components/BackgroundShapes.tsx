
interface BackgroundShapesProps {
  isSuccess?: boolean;
}

export const BackgroundShapes = ({ isSuccess = false }: BackgroundShapesProps) => {
  if (isSuccess) {
    return (
      <div className="absolute inset-0 overflow-hidden">
        <img 
          src="/lovable-uploads/e80a7986-8f5e-48e7-a28d-5d1db78986b9.png" 
          alt="" 
          className="floating-shape absolute top-20 left-10 w-32 h-32 opacity-20 animate-float logo-glow"
        />
        <img 
          src="/lovable-uploads/2e8d65e4-2234-40cc-895f-27de03f3750a.png" 
          alt="" 
          className="floating-shape absolute bottom-20 right-10 w-28 h-28 opacity-25 animate-float-delayed logo-glow"
        />
      </div>
    );
  }

  return (
    <div className="absolute inset-0 overflow-hidden">
      <img 
        src="/lovable-uploads/a126133d-aac1-4c46-999b-4d4eaab3314a.png" 
        alt="" 
        className="floating-shape absolute top-20 left-10 w-32 h-32 opacity-30 animate-float logo-glow hover-scale"
      />
      <img 
        src="/lovable-uploads/e80a7986-8f5e-48e7-a28d-5d1db78986b9.png" 
        alt="" 
        className="floating-shape absolute top-40 right-20 w-40 h-40 opacity-25 animate-float-delayed logo-glow hover-scale"
      />
      <img 
        src="/lovable-uploads/0c36ddce-4121-498b-8d17-bd0cdc24d1df.png" 
        alt="" 
        className="floating-shape absolute bottom-40 left-20 w-36 h-36 opacity-35 animate-float logo-glow hover-scale"
      />
      <img 
        src="/lovable-uploads/422edc56-2d27-4fc2-8eb5-274f2ae49cab.png" 
        alt="" 
        className="floating-shape absolute bottom-20 right-10 w-28 h-28 opacity-30 animate-float-delayed logo-glow hover-scale"
      />
      <img 
        src="/lovable-uploads/2e8d65e4-2234-40cc-895f-27de03f3750a.png" 
        alt="" 
        className="floating-shape absolute top-1/2 left-1/4 w-24 h-24 opacity-20 animate-float logo-glow hover-scale"
      />
      <img 
        src="/lovable-uploads/b3874ba3-7a01-4545-81cb-604e70203e73.png" 
        alt="" 
        className="floating-shape absolute top-1/3 right-1/3 w-44 h-44 opacity-25 animate-float-delayed animate-rotate-slow logo-glow hover-scale"
      />
    </div>
  );
};
