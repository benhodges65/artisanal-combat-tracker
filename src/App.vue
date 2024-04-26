<template>
  <div class="container">
    <the-header></the-header>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import TheHeader from './components/layout/TheHeader.vue'
</script>

<style>
@import 'primeicons/primeicons.css';

.p-dropdown-panel .p-dropdown-items .p-dropdown-item {
  padding: 0.2rem !important;
}

.message {
  font-size: 1rem;
  margin: 0.2rem;
}

html,
body {
  scrollbar-gutter: stable;
}
.flex {
  display: flex;
}
.flex-row {
  flex-direction: row;
}
.justify-content-between {
  justify-content: space-between;
}
.align-items-start {
  align-items: flex-start;
}
.align-items-end {
  align-items: flex-end;
}
.gap-2 {
  gap: 0.5rem;
}
.gap-3 {
  gap: 1rem;
}
.gap-4 {
  gap: 1.5rem;
}
.gap-5 {
  gap: 3rem;
}

html {
  overflow-y: scroll;
}

.create-card {
  margin-bottom: 1rem;
}

.flex {
  display: flex;
}
.flex-wrap {
  flex-wrap: wrap;
}
.gap-2 {
  gap: 0.5rem;
}
.align-items-center {
  align-items: center;
}
.input-padding {
  padding: 0.25rem 0.5rem;
}

div.form-group {
  color: #000;
  font-size: 1rem;
  font-weight: 700;
}

div {
  padding-bottom: 3px;
  padding-top: 3px;
}

a:visited {
  color: #1a1075;
}

a {
  color: #1a1075;
}

body {
  -webkit-text-size-adjust: 100%;
  -webkit-tap-highlight-color: transparent;
  background-color: #fff;
  background-color: var(--bs-body-bg);
  color: #212529;
  color: var(--bs-body-color);
  font-family:
    system-ui,
    -apple-system,
    Segoe UI,
    Roboto,
    Helvetica Neue,
    Noto Sans,
    Liberation Sans,
    Arial,
    sans-serif,
    Apple Color Emoji,
    Segoe UI Emoji,
    Segoe UI Symbol,
    Noto Color Emoji;
  font-family: var(--bs-body-font-family);
  font-size: 1rem;
  font-size: var(--bs-body-font-size);
  font-weight: 400;
  font-weight: var(--bs-body-font-weight);
  line-height: 1.5;
  line-height: var(--bs-body-line-height);
  margin: 0;
  text-align: var(--bs-body-text-align);
  --scrollbar-width: 0px !important;
}

.container {
  height: 100%;
  max-width: 1100px;
  --bs-gutter-x: 3rem;
  --bs-gutter-y: 0;
  margin-left: auto;
  margin-right: auto;
  padding-left: calc(var(--bs-gutter-x) * 0.5);
  padding-right: calc(var(--bs-gutter-x) * 0.5);
}

:root {
  --bs-blue: #0d6efd;
  --bs-indigo: #6610f2;
  --bs-purple: #6f42c1;
  --bs-pink: #d63384;
  --bs-red: #dc3545;
  --bs-orange: #fd7e14;
  --bs-yellow: #ffc107;
  --bs-green: #198754;
  --bs-teal: #20c997;
  --bs-cyan: #0dcaf0;
  --bs-black: #000;
  --bs-white: #fff;
  --bs-gray: #6c757d;
  --bs-gray-dark: #343a40;
  --bs-gray-100: #f8f9fa;
  --bs-gray-200: #e9ecef;
  --bs-gray-300: #dee2e6;
  --bs-gray-400: #ced4da;
  --bs-gray-500: #adb5bd;
  --bs-gray-600: #6c757d;
  --bs-gray-700: #495057;
  --bs-gray-800: #343a40;
  --bs-gray-900: #212529;
  --bs-primary: #0d6efd;
  --bs-secondary: #6c757d;
  --bs-success: #198754;
  --bs-info: #0dcaf0;
  --bs-warning: #ffc107;
  --bs-danger: #dc3545;
  --bs-light: #f8f9fa;
  --bs-dark: #212529;
  --bs-primary-rgb: 13, 110, 253;
  --bs-secondary-rgb: 108, 117, 125;
  --bs-success-rgb: 25, 135, 84;
  --bs-info-rgb: 13, 202, 240;
  --bs-warning-rgb: 255, 193, 7;
  --bs-danger-rgb: 220, 53, 69;
  --bs-light-rgb: 248, 249, 250;
  --bs-dark-rgb: 33, 37, 41;
  --bs-white-rgb: 255, 255, 255;
  --bs-black-rgb: 0, 0, 0;
  --bs-body-color-rgb: 33, 37, 41;
  --bs-body-bg-rgb: 255, 255, 255;
  --bs-font-sans-serif: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', 'Noto Sans',
    'Liberation Sans', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
    'Noto Color Emoji';
  --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New',
    monospace;
  --bs-gradient: linear-gradient(180deg, hsla(0, 0%, 100%, 0.15), hsla(0, 0%, 100%, 0));
  --bs-body-font-family: var(--bs-font-sans-serif);
  --bs-body-font-size: 1rem;
  --bs-body-font-weight: 400;
  --bs-body-line-height: 1.5;
  --bs-body-color: #212529;
  --bs-body-bg: #fff;
  --bs-border-width: 1px;
  --bs-border-style: solid;
  --bs-border-color: #dee2e6;
  --bs-border-color-translucent: rgba(0, 0, 0, 0.175);
  --bs-border-radius: 0.375rem;
  --bs-border-radius-sm: 0.25rem;
  --bs-border-radius-lg: 0.5rem;
  --bs-border-radius-xl: 1rem;
  --bs-border-radius-2xl: 2rem;
  --bs-border-radius-pill: 50rem;
  --bs-link-color: #0d6efd;
  --bs-link-hover-color: #0a58ca;
  --bs-code-color: #d63384;
  --bs-highlight-bg: #fff3cd;
}
</style>
