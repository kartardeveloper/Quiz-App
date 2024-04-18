function Header({ quiz }) {
  return (
    <header>
      <div className="container mx-auto py-14 px-14">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl text-white font-medium">QUIZ APP</h1>
          {Object.keys(quiz).length > 0 && (
            <div className="flex items-center gap-2">
              <img src={quiz.icon} alt="Quiz Icon" className="w-8 h-8" />
              <h3 className="text-2xl text-white font-medium">{quiz.title}</h3>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
