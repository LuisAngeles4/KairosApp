const BASE_URL = "https://69d54e9dd396bd74235eabe9.mockapi.io/api/v1/decisions"; // usa tu endpoint real

// ✅ GUARDAR DECISIÓN
export const saveDecision = async (data: any) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...data,
      pros: JSON.stringify(data.pros), // 🔥 importante
      cons: JSON.stringify(data.cons), // 🔥 importante
    }),
  });

  if (!res.ok) throw new Error("Error al guardar");

  return res.json();
};

// ✅ OBTENER DECISIONES POR USUARIO
export const getDecisionsByUser = async (userId: string) => {
  const res = await fetch(`${BASE_URL}?userId=${userId}`);

  if (!res.ok) throw new Error("Error al obtener datos");

  const data = await res.json();

  // 🔥 parse automático
  return data.map((item: any) => ({
    ...item,
    pros: JSON.parse(item.pros || "[]"),
    cons: JSON.parse(item.cons || "[]"),
  }));
};
