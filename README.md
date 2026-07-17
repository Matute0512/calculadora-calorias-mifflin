# 🥗 Calculadora de Calorías y Objetivos Nutricionales

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-100%25-brightgreen)
![Accesibilidad](https://img.shields.io/badge/WCAG%202.1-AA-blue)

Aplicación web estática que calcula tu **Tasa Metabólica Basal (TMB)** y requerimiento calórico diario usando la fórmula de **Mifflin‑St Jeor**, desglosando los resultados en tres objetivos: **déficit**, **mantenimiento** y **superávit**.

> ⚠️ **Aviso Legal**: Esta herramienta tiene fines informativos y educativos. No sustituye el consejo de un profesional de la salud. Consulta a un nutricionista o médico antes de realizar cambios en tu alimentación.

## 🚀 Características

- Cálculo preciso de TMB según Mifflin‑St Jeor.
- Ajuste por nivel de actividad física (sedentario, ligero, moderado, activo, muy activo).
- Visualización de calorías para tres metas: pérdida de grasa, mantenimiento y aumento muscular.
- Diseño **responsive** y accesible (WCAG 2.1 AA).
- Arquitectura modular con separación clara de responsabilidades (SRP).
- Sin dependencias externas: solo HTML5, CSS3 y JavaScript Vanilla.

## 🛠️ Tecnologías

- **HTML5** semántico con validación nativa de formularios.
- **CSS3** con Custom Properties, Flexbox/Grid y metodología mobile‑first.
- **JavaScript (ES6+)** estructurado en módulos funcionales puros.
- **Git/GitHub** con flujo de trabajo profesional (Git Flow simplificado).

## 📁 Estructura del proyecto

calculadora-calorias-mifflin/
├── index.html # Estructura semántica y formulario
├── style.css # Estilos responsive con variables CSS
├── app.js # Lógica de negocio, UI y eventos (SRP)
├── .gitignore
└── README.md


## 🌳 Estrategia de ramas

| Rama        | Propósito |
|-------------|-----------|
| `main`      | Código estable listo para producción / GitHub Pages |
| `develop`   | Integración de características completadas |
| `feature/*` | Desarrollo de nuevas funcionalidades (ej. `feature/estructura-html`) |
| `test/*`    | Pruebas y validación (ej. `test/verificacion-calculos`) |

## ⚙️ Cómo clonar y usar localmente

```bash
git clone https://github.com/Matute0512/calculadora-calorias-mifflin.git
cd calculadora-calorias-mifflin
git checkout develop
Abre index.html en tu navegador. No requiere servidor.
```

## 📜 Licencia
Este proyecto es de uso educativo. Puedes utilizarlo como base para tu portafolio, siempre incluyendo el aviso legal correspondiente.

Hecho con ❤️ por Matías Torres