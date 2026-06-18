"""Backend tests for Euro Mobile & Computer landing page API."""
import os
import pytest
import requests
from dotenv import load_dotenv
from pathlib import Path

load_dotenv(Path(__file__).resolve().parents[1] / ".env")

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL") or "https://brand-landing-v2.preview.emergentagent.com"
BASE_URL = BASE_URL.rstrip("/")
API = f"{BASE_URL}/api"


@pytest.fixture
def api_client():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# -------- Health / root --------
class TestHealth:
    def test_root(self, api_client):
        r = api_client.get(f"{API}/")
        assert r.status_code == 200
        assert "message" in r.json()


# -------- Repair Requests CRUD --------
class TestRepairRequests:
    def test_create_repair_request(self, api_client):
        payload = {
            "name": "TEST_Jane Smith",
            "email": "TEST_jane@example.com",
            "phone": "07123456789",
            "device_type": "Mobile / Smartphone",
            "device_model": "iPhone 13 Pro",
            "issue": "Cracked screen, touch not responding",
            "photos": [],
        }
        r = api_client.post(f"{API}/repair-requests", json=payload)
        assert r.status_code == 200, r.text
        data = r.json()
        assert "id" in data
        assert data["name"] == payload["name"]
        assert data["email"] == payload["email"]
        assert data["status"] == "received"
        assert "created_at" in data
        pytest.created_id = data["id"]

    def test_list_repair_requests_contains_created(self, api_client):
        r = api_client.get(f"{API}/repair-requests")
        assert r.status_code == 200
        items = r.json()
        assert isinstance(items, list)
        ids = [it["id"] for it in items]
        assert getattr(pytest, "created_id", None) in ids
        for it in items:
            assert "_id" not in it  # MongoDB _id should be excluded

    def test_create_with_photos_base64(self, api_client):
        small_data_url = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAusB9ZznTuwAAAAASUVORK5CYII="
        payload = {
            "name": "TEST_PhotoUser",
            "email": "TEST_photo@example.com",
            "phone": "07111222333",
            "device_type": "Laptop",
            "device_model": "Dell XPS 15",
            "issue": "Won't power on",
            "photos": [small_data_url],
        }
        r = api_client.post(f"{API}/repair-requests", json=payload)
        assert r.status_code == 200
        data = r.json()
        assert data["photos"] == [small_data_url]

    def test_create_missing_required_field_returns_422(self, api_client):
        bad = {"name": "TEST_NoEmail"}
        r = api_client.post(f"{API}/repair-requests", json=bad)
        assert r.status_code == 422
