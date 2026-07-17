# Guía de Pruebas - Calculadora de Calorías

## Objetivo
Verificar que la lógica de negocio (cálculos) y el comportamiento general de la aplicación sean correctos.

## Prerrequisitos
- Abrir `index.html` en un navegador moderno (Chrome, Firefox, Edge).
- Tener abiertas las herramientas de desarrollo (F12) para inspeccionar la consola si fuera necesario.

---

## 1. Pruebas del Core de Negocio (Cálculos manuales)

### 1.1. Hombre sedentario
**Datos de entrada:**
- Peso: 75 kg
- Altura: 175 cm
- Edad: 30 años
- Sexo: Hombre
- Actividad: Sedentario (1.2)

**Resultados esperados:**
- TMB = (10×75) + (6.25×175) – (5×30) + 5 = 750 + 1093.75 – 150 + 5 = **1698.75 kcal**
- GET = 1698.75 × 1.2 = **2038.5 kcal**
- Déficit: 2038.5 – 500 = 1538.5 → redondeado **1539 kcal** (mínimo TMB, no se aplica)
- Mantenimiento: **2039 kcal**
- Superávit: 2038.5 + 500 = 2538.5 → **2539 kcal**

**Procedimiento:** Ingresa los datos en la calculadora y verifica que los valores mostrados coincidan con los esperados.

### 1.2. Mujer activa
**Datos de entrada:**
- Peso: 60 kg
- Altura: 165 cm
- Edad: 25 años
- Sexo: Mujer
- Actividad: Activo (1.725)

**Resultados esperados:**
- TMB = (10×60) + (6.25×165) – (5×25) – 161 = 600 + 1031.25 – 125 – 161 = **1345.25 kcal**
- GET = 1345.25 × 1.725 = **2320.56 kcal**
- Déficit: 2320.56 – 500 = 1820.56 → **1821 kcal**
- Mantenimiento: **2321 kcal**
- Superávit: 2320.56 + 500 = 2820.56 → **2821 kcal**

### 1.3. Caso límite: déficit no puede ser menor que TMB
**Datos:** Hombre, TMB ~1500, GET ~1800 (sedentario).
- Déficit calculado = 1800 – 500 = 1300, pero debe ser ≥ TMB (1500), por lo tanto se mostrará **1500 kcal**.

**Prueba sugerida:** Hombre de 50 kg, 160 cm, 80 años, sedentario.
- TMB ≈ (10×50)+(6.25×160)-(5×80)+5 = 500+1000-400+5 = 1105
- GET = 1105×1.2 = 1326
- Déficit = max(1326-500, 1105) = max(826,1105) = 1105 → debe mostrar 1105 kcal.

---

## 2. Pruebas de validación del formulario

| Caso | Acción | Resultado esperado |
|------|--------|--------------------|
| Campos vacíos | Dejar todos los campos vacíos y pulsar "Calcular" | El formulario no se envía, aparecen tooltips nativos de HTML5 indicando campos requeridos. |
| Números negativos | Ingresar peso -10, altura 170, edad 20 | El input de peso impide valores menores a 30, el navegador muestra restricción. |
| Valores fuera de rango | Peso 350, altura 50, edad 120 | Los inputs bloquean valores fuera de min/max (peso 30-300, altura 100-250, edad 15-100). |
| Sexo no seleccionado | No marcar radio button | El formulario pide seleccionar una opción (required en el grupo). |
| Actividad no seleccionada | Dejar "Selecciona una opción" en el select | El campo select es required, el navegador evita el envío. |

Adicionalmente, abre la consola del navegador y verifica que no haya errores de JavaScript.

---

## 3. Pruebas de UI y responsividad

- **Comprobación de tarjetas:** Al calcular, las tres tarjetas deben aparecer con los colores semánticos (rojo claro, naranja claro, verde claro) y los valores correctos.
- **Redimensionar ventana:** Cambia el tamaño del navegador a un ancho de teléfono (~375px). Las tarjetas deben apilarse verticalmente y el formulario debe adaptarse sin desbordamientos horizontales.
- **Teclado (accesibilidad):** Navega con `Tab` por todos los campos y el botón. Verifica que el foco se vea claramente (borde azul). Al presionar `Enter` en un campo, el formulario debería enviarse (excepto en select donde es natural).

---

## 4. Documentación de resultados (a completar por el tester)

- [ ] Todos los cálculos del caso 1.1 coinciden.
- [ ] Todos los cálculos del caso 1.2 coinciden.
- [ ] El déficit respeta el límite inferior (caso 1.3).
- [ ] Las validaciones nativas funcionan correctamente.
- [ ] No hay errores en consola.
- [ ] La interfaz es usable en móvil y escritorio.