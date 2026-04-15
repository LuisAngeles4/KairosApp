const BASE_URL = "https://69d54e9dd396bd74235eabe9.mockapi.io/api/v1/decisions";

// ✅ GUARDAR
export const saveDecision = async (data: any) => {
  const payload: any = {
    type: data.type,
    userId: data.userId,
    date: data.date,
  };

  if (data.type === "decision") {
    payload.decision = data.decision;
    payload.pros = JSON.stringify(data.pros || []);
    payload.cons = JSON.stringify(data.cons || []);
  }

  if (data.type === "mood") {
    payload.mood = data.mood;
  }

  console.log("PAYLOAD:", payload);

  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    console.log("ERROR:", text);
    throw new Error(text);
  }

  return res.json();
};

// ✅ DECISIONES
export const getDecisions = async (userId: string) => {
  const res = await fetch(`${BASE_URL}?type=decision&userId=${userId}`);

  const data = await res.json();

  return Array.isArray(data)
    ? data.map((item: any) => ({
        ...item,
        pros: JSON.parse(item.pros || "[]"),
        cons: JSON.parse(item.cons || "[]"),
      }))
    : [];
};

// ✅ MOODS (🔥 ARREGLADO)
export const getMoods = async (userId: string) => {
  try {
    const res = await fetch(`${BASE_URL}?type=mood&userId=${userId}`);

    const data = await res.json();

    return Array.isArray(data) ? data : [];
  } catch (error) {
    console.log("ERROR GET MOODS:", error);
    return [];
  }
};
