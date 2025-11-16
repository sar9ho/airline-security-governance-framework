import pandas as pd
import matplotlib.pyplot as plt

# data
df = pd.read_csv("dashboard/risk_heatmap_data.csv")

# map severity to numeric/color
severity_color = {
    "Low": "green",
    "Medium": "yellow",
    "High": "red"
}

df["color"] = df["Risk Severity (Bucket)"].map(severity_color)

plt.figure(figsize=(6, 6))

# scatter plot as heatmap-style risk map
plt.scatter(
    df["Likelihood"],
    df["Impact"],
    s=300,  # point size
    c=df["color"],
    edgecolors="black"
)

# each point labeled w Risk ID
for _, row in df.iterrows():
    plt.text(
        row["Likelihood"] + 0.03,
        row["Impact"] + 0.03,
        row["Risk ID"],
        fontsize=9
    )

plt.xticks(range(1, 6))
plt.yticks(range(1, 6))

plt.xlabel("Likelihood (1–5)")
plt.ylabel("Impact (1–5)")
plt.title("SkyShield Airlines – Cyber Risk Heatmap")

plt.grid(True, linestyle="--", alpha=0.4)

plt.xlim(0.5, 5.5)
plt.ylim(0.5, 5.5)

plt.tight_layout()
plt.savefig("dashboard/risk_heatmap.png", dpi=200)
plt.close()
