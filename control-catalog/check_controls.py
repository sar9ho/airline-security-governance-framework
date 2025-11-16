import yaml
from pathlib import Path

CATALOG_PATH = Path(__file__).parent / "controls.yaml"

def load_controls():
    with open(CATALOG_PATH, "r") as f:
        data = yaml.safe_load(f)
    return data["controls"]

def main():
    controls = load_controls()
    print("SkyShield Airlines – Control Implementation Summary\n")
    for ctrl in controls:
        missing_evidence = (not ctrl.get("evidence"))
        print(f"- {ctrl['id']} – {ctrl['name']}")
        print(f"  Related policy: {ctrl['policy']}")
        print(f"  NIST CSF: {', '.join(ctrl.get('nist_csf', []))}")
        print(f"  ISO 27001: {', '.join(ctrl.get('iso_27001', []))}")
        if missing_evidence:
            print("  Status: (X) No evidence listed – needs implementation proof.")
        else:
            print("  Status: Evidence artifacts defined.")
        print()

if __name__ == "__main__":
    main()
