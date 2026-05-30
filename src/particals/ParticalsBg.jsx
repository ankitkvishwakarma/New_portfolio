import Particles from "@tsparticles/react";

export default function ParticlesBackground() {
  return (
    <Particles
      className="absolute inset-0"
      options={{
        fpsLimit: 120,

        particles: {
          number: {
            value: 60,
          },

          color: {
            value: "#00ffff",
          },

          opacity: {
            value: 0.3,
          },

          size: {
            value: { min: 1, max: 3 },
          },

          move: {
            enable: true,
            speed: 1,
          },

          links: {
            enable: true,
            color: "#00ffff",
            distance: 150,
            opacity: 0.1,
          },
        },
      }}
    />
  );
}
