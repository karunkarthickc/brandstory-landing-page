import { useEffect, useState } from "react";

let cache = null; // share one request between components

export default function useContent() {
  const [state, setState] = useState({ data: cache, loading: !cache, error: null });

  useEffect(() => {
    if (cache) return;
    let active = true;
    fetch("/content.json")
      .then((r) => { if (!r.ok) throw new Error("Request failed"); return r.json(); })
      .then((data) => { cache = data; if (active) setState({ data, loading: false, error: null }); })
      .catch((error) => active && setState({ data: null, loading: false, error }));
    return () => { active = false; };
  }, []);

  return state;
}
