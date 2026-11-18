/**
 * Auth service - PLACEHOLDER for future backend integration.
 *
 * The backend (API + MySQL) is NOT connected yet. These functions only
 * prepare the data that the forms will send later and report that no
 * server is connected. Nothing is stored and no one is signed in.
 *
 * When the team's backend is ready, replace the bodies below with real
 * requests, for example:
 *
 *   const response = await fetch(`${API_BASE_URL}/auth/login`, {
 *     method: "POST",
 *     headers: { "Content-Type": "application/json" },
 *     body: JSON.stringify(payload),
 *   });
 *   if (!response.ok) throw new Error("Login failed");
 *   return response.json();
 */

export const API_BASE_URL = ""; // e.g. "http://localhost:5000/api" once the backend exists

export function buildLoginPayload({ email, password }) {
  return { email: email.trim().toLowerCase(), password };
}

export function buildRegisterPayload({ name, email, password }) {
  return { name: name.trim(), email: email.trim().toLowerCase(), password };
}

export async function loginUser(formData) {
  const payload = buildLoginPayload(formData);
  // TODO: send `payload` to the backend login endpoint.
  return { connected: false, payload };
}

export async function registerUser(formData) {
  const payload = buildRegisterPayload(formData);
  // TODO: send `payload` to the backend register endpoint.
  return { connected: false, payload };
}
