"use client";

import Image from "next/image";
import facebookLogo from "@/img/Facebook.png";
import instagramLogo from "@/img/Instagram.png";
import xLogo from "@/img/X.png";
import mainLogo from "@/img/logo.png";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        <div className="mb-6 md:mb-0">
          <Image
            src={mainLogo}
            alt="Logo de la empresa"
            className="h-20 w-20 rounded-full"
            width={80}
            height={80}
          />
        </div>

        <div className="text-center mb-6 md:mb-0">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold text-lg mb-2">Compañía</h3>
              <ul className="space-y-1">
                <li>
                  <a href="/about" className="hover:underline">
                    Acerca de
                  </a>
                </li>
                <li>
                  <a href="/careers" className="hover:underline">
                    Empleo
                  </a>
                </li>
                <li>
                  <a href="/press" className="hover:underline">
                    Prensa
                  </a>
                </li>
                <li>
                  <a href="/blog" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Comunidad</h3>
              <ul className="space-y-1">
                <li>
                  <a href="/support" className="hover:underline">
                    Soporte
                  </a>
                </li>
                <li>
                  <a href="/guidelines" className="hover:underline">
                    Directrices
                  </a>
                </li>
                <li>
                  <a href="/events" className="hover:underline">
                    Eventos
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Enlaces Útiles</h3>
              <ul className="space-y-1">
                <li>
                  <a href="/privacy" className="hover:underline">
                    Política de Privacidad
                  </a>
                </li>
                <li>
                  <a href="/terms" className="hover:underline">
                    Términos de Servicio
                  </a>
                </li>
                <li>
                  <a href="/faq" className="hover:underline">
                    FAQ
                  </a>
                </li>
                <li>
                  <a href="/Ayuda" className="hover:underline">
                    Centro de Ayuda
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-lg mb-2">Apóyanos</h3>
              <ul className="space-y-1">
                <li>
                  <a href="/Donacion" className="hover:underline">
                    Donar
                  </a>
                </li>
                <li>
                  <a href="/volunteer" className="hover:underline">
                    Voluntariado
                  </a>
                </li>
                <li>
                  <a href="/sponsorship" className="hover:underline">
                    Patrocinio
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex space-x-4">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-3 bg-blue-600 rounded-full hover:bg-blue-500">
              <Image
                src={facebookLogo}
                alt="Facebook"
                className="h-6 w-6"
                width={24}
                height={24}
              />
            </div>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="p-3 bg-pink-600 rounded-full hover:bg-pink-500">
              <Image
                src={instagramLogo}
                alt="Instagram"
                className="h-6 w-6"
                width={24}
                height={24}
              />
            </div>
          </a>
          <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
            <div className="p-3 bg-blue-400 rounded-full hover:bg-blue-300">
              <Image
                src={xLogo}
                alt="X (Twitter)"
                className="h-6 w-6"
                width={24}
                height={24}
              />
            </div>
          </a>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-white">
          &copy; 2024 Find Your Pet. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
