import React from 'react';
import Header from './components/header';
import { projectsMock } from './mocks';
import { ProjectPostContainer } from './components/project';

export default function Home() {
  return (
    <div className="bg-base-200 flex flex-col items-center min-h-screen h-screen overflow-y-auto">
      <Header />
      <label htmlFor="post-project" className="input input-bordered flex items-center gap-2 mt-6 w-3/4 md:w-1/2">
        <span className="text-xl sr-only">🚀</span>
        <input id="post-project" type="text" className="grow" placeholder="Compartilhe seu projeto!" />
      </label>
      <ProjectPostContainer projectsInfo={projectsMock} />
    </div>
  );
}
