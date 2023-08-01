import { useEffect, useState } from "react";



export default function NavBar() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleToggle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  return (
    <>
      <div className="navbar bg-base-100 container mx-auto w-3/4 sticky top-0 z-50">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">
          <div className="avatar online placeholder">
            <div className="bg-neutral-focus text-neutral-content rounded w-10">
              <img
                src="Ratul_11zon.jpeg"
                alt="Tailwind-CSS-Avatar-component"
              />
            </div>
          </div>
            Ratul Das ⚡
          </a>
        </div>

        <div className="md:hidden flex-none">
        {
          navbarOpen ? (
            <button
              className="btn btn-square btn-ghost"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-up border-2 border-lime-300 rounded-xl hover:bg-lime-50"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="6 15 12 9 18 15" />
              </svg>
            </button>
          ) : (
            <>
            <button
              className="btn btn-square btn-ghost"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-chevron-down border-2 border-lime-300 rounded-xl hover:bg-lime-50"
                width="28"
                height="28"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#2c3e50"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>
            </>
          )
        }
        </div>
        <div className="flex-none hidden md:block">
          <ul className="menu menu-horizontal">
            <li className="mail border-2 border-lime-300 rounded-xl hover:bg-lime-50 mr-2">
              <a href="http://">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-current" stroke-width="2" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M13 19h-8a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v5.5" />
                  <path d="M3 7l9 6l9 -6" />
                  <path d="M19 16l-2 3h4l-2 3" />
                </svg>
              </a>
            </li>
            <li className="calendar border-2 border-lime-300 rounded-xl hover:bg-lime-50 mr-2">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 stroke-current"  stroke-width="2" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M13.5 21h-7.5a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v5" />
                  <path d="M16 3v4" />
                  <path d="M8 3v4" />
                  <path d="M4 11h16" />
                  <path d="M19 16l-2 3h4l-2 3" />
                </svg>
              </a>
            </li>
            <li className="telegram border-2 border-lime-300 rounded-xl hover:bg-lime-50 mr-2">
              <a href="/">
                <svg xmlns="http://www.w3.org/2000/svg"  className="w-6 h-6 stroke-current" viewBox="0 0 24 24" stroke-width="2" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                  <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4" />
                </svg>
              </a>
            </li>
            <li className="color-swap border-2 border-lime-300 rounded-xl hover:bg-lime-50 mr-2">
              <label className="swap swap-rotate">
                {/* this hidden checkbox controls the state */}
                <input type="checkbox" onChange={handleToggle} />

                {/* sun icon */}
                <svg
                  className="swap-on fill-current w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                </svg>

                {/* moon icon */}
                <svg
                  className="swap-off fill-current w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                </svg>
              </label>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
