//WIP need to adjust for event

import { FormData } from '@/app/event/page';

export function sendEvent(data: FormData) {
  const apiEndpoint = '/api/eventmail';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}